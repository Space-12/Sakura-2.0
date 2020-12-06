const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🎉" "🤖"];

module.exports = {
    name: "nitro",
    aliases: [],
    category: "fun",
    description: "Bot vs You.",
    usage: "sec",
    run:  run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("Add a reaction toget free nitro")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);
	
	const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.reactions.removeAll();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);
	
	return "You won!";
	}
}

		