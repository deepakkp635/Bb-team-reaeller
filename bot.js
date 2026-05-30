const TelegramBot = require('node-telegram-bot-api');
const express = require("express");

// 👉 TOKEN Render Environment से आएगा
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

// 👉 simple reply
bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Hello 👋 Bot chal raha hai!");
});

// 👉 Render ke liye server (IMPORTANT)
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(3000, () => {
  console.log("Server running");
});
