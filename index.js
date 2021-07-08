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
	if (message.content === '§ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});

// login to Discord with your app's token
client.login('ODYyNzk0MzI1MTg4MDE4MjA3.YOdh1Q.aIH9ivxARzKbKcaA-4bHThxkFJI');
