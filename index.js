// require the config
const { prefix, token, twitch, live_title, stream_status, modules } = require('./config.json');


// require the discord.js module
const Discord = require('discord.js');

// require the node file system "fs"
const fs = require('fs');

// create a new Discord client
const client = new Discord.Client();

// create a new Discord Collection
client.commands = new Discord.Collection();

// read the Modulesfiles in ./bot_modules
const commandFiles = fs.readdirSync(modules).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./bot_modules/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({
		status: 'online',
		activity: {
			name: live_title,
			type: stream_status,
			url: twitch,
		},
	});
});

// Ping Pong Test
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong');
	}
	else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop');
	}
	else if (message.content === `${prefix}server`) {
		message.channel.send(`Servername: ${message.guild.name}`);
	}
	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}
});

// login to Discord with your app's token
client.login(token);
