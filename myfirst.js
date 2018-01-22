var http = require('http');
var util = require('util');
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '514117757:AAGmasOg74Ygf3JKg7I8Y7No6b_zt6e5SHk';
const bot = new TelegramBot(token, {polling: false});

http.createServer(function (req, res) {

    //console.log('Request received: ');
    //util.log(util.inspect(req)) // this line helps you inspect the request so you can see whether the data is in the url (GET) or the req body (POST)
    util.log('Request recieved: \nmethod: ' + req.method + '\nurl: ' + req.url) // this line logs just the method and url

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    req.on('data', function (chunk) {
        console.log('GOT DATA!' + chunk);
	bot.sendMessage('330240399', 'Its snowing! at: ' + chunk);
    });
    res.end('callback(\'{\"msg\": \"OK\"}\')');

}).listen(8080);
console.log('Server running on port 8080');
