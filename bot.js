var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
case 'meow':
                bot.sendMessage({
                    to: channelID,
                    message: 'WOOF!'
                });
            break;
case 'puppy':
                bot.uploadFile({
                    to: channelID,
                    file: "b" + Math.floor((Math.random() * 10) + 1) + ".jpg"
                });
            break;
case 'puppygif':
                bot.uploadFile({
                    to: channelID,
                    file: "c" + Math.floor((Math.random() * 10) + 1) + ".gif"
                });
            break;
case 'animepuppy':
                bot.uploadFile({
                    to: channelID,
                    file: "a" + Math.floor((Math.random() * 10) + 1) + ".jpg"
                });
            break;
case 'animepuppygif':
                bot.uploadFile({
                    to: channelID,
                    file: "d" + Math.floor((Math.random() * 10) + 1) + ".gif"
                });
            break;
case 'Pinky':
                bot.uploadFile({
                    to: channelID,
                    file: "e" + Math.floor((Math.random() * 7) + 1) + ".jpg"
 });
            break;
case 'Oscar':
                bot.uploadFile({
                    to: channelID,
                    file: "e" + Math.floor((Math.random() * 7) + 1) + ".jpg"
});
            break;
case 'cat':
                bot.uploadFile({
                    to: channelID,
                    file: "f" + Math.floor((Math.random() * 10) + 1) + ".jpg"
});
            break;
case 'happy':
                bot.uploadFile({
                    to: channelID,
                    file: "g" + Math.floor((Math.random() * 10) + 1) + ".gif"
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});