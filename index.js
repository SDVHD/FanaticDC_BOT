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
	client.user.setStatus('available');
	client.user.setPresence({
		game: {
			name: 'with depression',
			type: 'STREAMING',
			url: 'https://www.twitch.tv/swissdavinci_hd',
		},
	});
});

// Ping Pong Test
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong');
	}
	else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`Servername: ${message.guild.name}`);
	}
});

// import other Modules


// login to Discord with your app's token
client.login(token);
