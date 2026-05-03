const {
    ContainerBuilder,
    MediaGalleryBuilder,
    MediaGalleryItemBuilder,
    TextDisplayBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    SectionBuilder,
    ButtonBuilder,
    ButtonStyle,
    StringSelectMenuBuilder,
    MessageFlags
} = require("discord.js");

module.exports = {
    name: "info",
    async execute(message, args, client) {
        // Components v2 Container Layout
        const components = [
            new ContainerBuilder()
                .addMediaGalleryComponents(
                    new MediaGalleryBuilder().addItems(
                        new MediaGalleryItemBuilder().setURL(
                            "https://i.imgur.com/uR1D8Y4.png" // Gallery image at the start
                        )
                    )
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("### Information Center")
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(
                        "Welcome to the **Information Center**! Use the components below to navigate through our resources and learn more about us."
                    )
                )
                .addSeparatorComponents(
                    new SeparatorBuilder()
                        .setDivider(true)
                        .setSpacing(SeparatorSpacingSize.Small)
                )
                .addSectionComponents(
                    new SectionBuilder()
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(
                                "Join our community group:"
                            )
                        )
                        .setButtonAccessory(
                            new ButtonBuilder()
                                .setLabel("Roblox Group")
                                .setStyle(ButtonStyle.Link)
                                .setURL("https://www.roblox.com/groups/0/Your-Group-Here")
                                .setEmoji("1261058032763240551")
                        )
                )
                .addSeparatorComponents(
                    new SeparatorBuilder()
                        .setDivider(true)
                        .setSpacing(SeparatorSpacingSize.Small)
                )
                .addSectionComponents(
                    new SectionBuilder()
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(
                                "Explore more about us:"
                            )
                        )
                        .setSelectMenuAccessory(
                            new StringSelectMenuBuilder()
                                .setCustomId("info-menu")
                                .setPlaceholder("Select a category...")
                                .addOptions([
                                    {
                                        label: "Important Links",
                                        description: "Essential resources and links.",
                                        value: "important_links",
                                        emoji: "🔗"
                                    },
                                    {
                                        label: "About Us",
                                        description: "Learn more about our mission.",
                                        value: "about_us",
                                        emoji: "ℹ️"
                                    },
                                ])
                        )
                )
        ];

        await message.reply({
            flags: MessageFlags.IsComponentsV2,
            components,
        });
    },
};
