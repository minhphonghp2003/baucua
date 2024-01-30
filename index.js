const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
const app = express();
var cors = require("cors");

const port = 3000;
let KETQUA = "";
require("dotenv").config(); //initializes dotenv
const Discord = require("discord.js"); //imports discord.js

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
}); //creates new client

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
    let command = msg.content;
    KETQUA = command.split("!gen ")[1]
    console.log(KETQUA);
});

app.use(cors());

app.get("/", (req, res) => {
    res.send(KETQUA);
});

app.listen(80, () => {
    console.log(`Example app listening on port ${80}`);
});

client.login(process.env.CLIENT_TOKEN); //signs the bot in with token
