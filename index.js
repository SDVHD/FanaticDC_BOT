// index.js
const Discord = require('discord.js');
const client = new Discord.Client();

// ... client setup (keep reading)
console.log(process.env.A);
console.log(process.env.B);
client.login(process.env.TOKEN);