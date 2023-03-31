# [v14] Discord.js Bot Template! 🍰💌

A template for your Discord bots that supports Slash Commands and automatically deploys your commands! Made with Yarn Package Manager and Discord.JS using Discord v14 API.

### To register a global command, Discord has a delay of up to 1 hour. Test your commands locally with your Guild ID before deploying to the production environment. 

## Installation


 Clone this repository 💻: 

```bash
$ git clone https://github.com/vergonha/discord-js-template.git
$ cd discord-js-template
```

Rename or create new `.env` file 🔒, you need to fill it in correctly, or your bot will not work. Veja o arquivo `.env.example` file.

```env
BOT_TOKEN=DISCORD BOT TOKEN
LOCAL_GUILD_ID=LOCAL GUILD ID
```

In [this link](https://discord.com/developers/applications) you can register an application and get your TOKEN to add to your environment variables above. 

## Setup 

Install the project's dependencies with the `yarn install` command, then run `yarn start`.

## Starting and deploying
Inside the index.js file, we can find this function:

```js
client.once(Events.ClientReady, async callback => {
    await register(client, 'local');
    console.log(`everyday i imagine a future where i can be with you... 🌸`);
    // You can change this message as you like, it just indicates that the bot has been started.
});
```

Note the "register" function argument, which can be `global` or `local`. 


####  ⚠️ It is **important** that you change this before moving to the production environment. If not changed, the slash commands **will only work** on servers that have the "Guild ID" specified in the `.env` file.

![End.](https://64.media.tumblr.com/a17a9d47b8ce441197d89a92d797894f/3082c85cecabf432-00/s500x750/e1d24031919467b859c980fddb0033ed2775a9fe.gif)
