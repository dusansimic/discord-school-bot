const Discord = require('discord.js');
const googleCalendar = require('./google-calendar');
const config = require('./config');

const bot = new Discord.Client();

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}`);
});
bot.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	} else if (msg.content === 'raspored' || msg.content === 'Raspored') {
		msg.reply('evo ti raspored');
	} else if (msg.content === 'kalendar' || msg.content === 'Kalendar' || msg.content === 'planer' || msg.content === 'Planer') {
		googleCalendar(msg);
	}
});

bot.login(config.discordToken);
