const { REST, Collection, Routes } = require('discord.js')
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config()

async function readCommandsFolder(client){
    const commands = []

    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        
        if ('data' in command && 'execute' in command) { 
            client.commands.set(command.data.name, command); 
            commands.push(command.data.toJSON());
        }
    }

    return commands
};

function createRest(){
    return new REST({ version: '10' })
        .setToken(process.env.BOT_TOKEN);
}

async function register (client, mode) {
    const rest = createRest();
    client.commands = new Collection();
    let commands = await readCommandsFolder(client);
    
    switch (mode) {
        case 'local':
            return await rest.put(
                Routes.applicationGuildCommands(
                    client.user.id, 
                    process.env.LOCAL_GUILD_ID),
                    { body: commands },
            ); 
        case 'global':
            return await rest.put(
                Routes.applicationCommands(
                    client.user.id),
                    { body: commands },
            );     
        default:
            throw new Error("You need to choose a mode to register your commands.")
    }
};

async function unregister (client) {
    const rest = createRest()
    return new Promise( async(resolve, reject) => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(
                    client.user.id, 
                    process.env.LOCAL_GUILD_ID),
                    { body: [] }
            );
        
            await rest.put(
                Routes.applicationCommands(
                    client.user.id),
                    { body: [] }
            );
            
            resolve(console.log("🌹 all commands has been deleted! "))
        } catch (err) {
            reject(err)   
        }
    });
};

module.exports = { register, unregister };