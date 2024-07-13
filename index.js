const TelegramBot = require("node-telegram-bot-api")

const token = "7240496653:AAHbKRN8tIENzTOQnDgA-yb-qYFjylJ8TT0"

const bot = new TelegramBot(token, { polling: true })

bot.on('message', async (msg) => {
    // console.log(msg);

    const text = msg.text
    const chatId = msg.chat.id

    if (text === "/start") {
        return bot.sendMessage(chatId, `Assalomu alaykum ${msg.from?.last_name}. Hohlagan sonni yozing :)`)
        // const a = text.typeof == Number
    }
    if (text === "/info") {
        return bot.sendMessage(chatId, `Hohlagan sonni yozing :) va bu bot sizga yozgan soningizni TOQ yoki JUFT ekanligini aytadi`)
    }
    if (text == 0) {
        return bot.sendMessage(chatId, `Soningiz 0 `)
    }
    if (text % 2 == 0) {
        return bot.sendMessage(chatId, `Soningiz Juft ${text}`)
    }
    if (text % 2 == 1) {
        return bot.sendMessage(chatId, `Soningiz Toq ${text}`)
    }
})