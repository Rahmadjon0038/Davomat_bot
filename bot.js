const sqlite3 = require('sqlite3');
const TelegramBot = require('node-telegram-bot-api')
const Token = require('dotenv').config()

const bot = new TelegramBot(Token.parsed.Token, { polling: true })

let db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) console.log('bazaga ulanishda xatolik')
    console.log('bazaga mofaqqiyatli ulandi 😎')
})

bot.onText(/\/start/, (msg) => {
    const chatid = msg.chat.id
    bot.sendMessage(chatid, `Salom ${msg.chat.first_name}`)
})