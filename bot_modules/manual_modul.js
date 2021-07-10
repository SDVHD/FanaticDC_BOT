const { prefix } = require('./config.json');

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// Add §help
client.on('message', message => {
	if (message.content === `${prefix}help`) {
		message.channel.send('hilfe');
	}
});