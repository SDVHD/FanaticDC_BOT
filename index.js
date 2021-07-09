// require the config
const { prefix, token } = require('./config.json');

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// Ping Pong Test
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	}
	else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	}
});

// login to Discord with your app's token
client.login(token);
