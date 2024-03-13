module.exports = async (client) => {
    client.on('emojiDelete', async (emoji) => {
        const auditLogs = await emoji.guild
        .fetchAuditLogs({ limit: 2, type: 'EMOJI_DELETE' })
        .catch((_) => {})
        const logs = auditLogs?.entries?.first()
        if (!logs) return
        const { executor, target, createdTimestamp } = logs
        let = difference = Date.now() - createdTimestamp; 
        if (difference > 3600000) return
        await client.db?.get(`${emoji.guild.id}_${executor?.id}_wl`).then(async (data) => {
            const antinuke = await client.db.get(`${emoji.guild.id}_antinuke`);
            if (antinuke !== true) return;
            if(data){
        if(data.mngstemo) return;
            }
            if (executor.id === emoji.guild.ownerId) return
            if (executor.id === client.user.id) return
            try {
                executor.guild = emoji.guild
                await client.util.FuckYou(
                    executor,
                    'Emoji Delete | Not Whitelisted'
                )
            } catch (err) {
                return
            }
        })
    })
}
