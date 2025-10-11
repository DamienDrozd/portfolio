type DiscordParams = {
    name: string;
    email: string;
    message: string;
};

export async function notifyDiscord({ name, email, message }: DiscordParams) {
    const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;
    if (!DISCORD_WEBHOOK_URL) return;

    const discordPayload = {
        content: `📩 **Nouveau message via le formulaire contact**`,
        embeds: [
            {
                title: 'Nouveau Contact',
                fields: [
                    { name: 'Nom', value: name, inline: true },
                    { name: 'Email', value: email, inline: true },
                    {
                        name: 'Message',
                        value:
                            message.length > 1000
                                ? message.substring(0, 1000) + '...'
                                : message,
                    },
                ],
                color: 0x3498db,
            },
        ],
    };

    await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload),
    });
}
