const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const directoryToWatch = './';
const debounceTime = 3000; // Wait 3 seconds after the last change before pushing
const commitMessage = 'Auto-commit: changes detected';

console.log(`🚀 Auto-push started. Watching for changes in: ${path.resolve(directoryToWatch)}`);
console.log(`📌 Target Remote: https://github.com/astrobytes7/texas-embeds.git`);

let timeout;

// Function to handle the git push process
function pushChanges() {
    console.log('🔄 Changes detected! Preparing to push...');
    
    const command = `git add . && git commit -m "${commitMessage}" && git push origin main`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            // If main fails, try master
            if (error.message.includes('src refspec main does not match any')) {
                console.log('⚠️  "main" branch not found, trying "master"...');
                exec(`git add . && git commit -m "${commitMessage}" && git push origin master`, (e, so, se) => {
                    if (e) {
                        console.error(`❌ Push failed: ${e.message}`);
                    } else {
                        console.log('✅ Successfully pushed to master!');
                    }
                });
            } else if (error.message.includes('403')) {
                console.error('❌ Permission Denied (403). Please ensure you have push access to the repository.');
            } else {
                console.error(`❌ Error during push: ${error.message}`);
            }
            return;
        }
        
        if (stdout) console.log(`📄 Output: ${stdout}`);
        console.log('✅ Changes pushed successfully!');
    });
}

// Watcher
fs.watch(directoryToWatch, { recursive: true }, (eventType, filename) => {
    // Ignore .git, node_modules, and the script itself
    if (filename && 
        !filename.includes('.git') && 
        !filename.includes('node_modules') && 
        filename !== 'autopush.js' &&
        filename !== '.DS_Store') {
        
        console.log(`📝 Change detected in: ${filename}`);
        
        // Debounce logic
        clearTimeout(timeout);
        timeout = setTimeout(pushChanges, debounceTime);
    }
});
