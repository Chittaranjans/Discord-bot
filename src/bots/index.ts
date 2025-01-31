import handleGuildMemberAdd from './events/guildMemberAdd';
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { checkBlogUpdates } from '../services/blogService';
import { TextChannel } from 'discord.js';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);


client.on('guildMemberAdd', handleGuildMemberAdd);

setInterval(async () => {
    const blogChannel = client.channels.cache.find(
      (channel) => channel.name === 'blog-updates'
    ) as TextChannel;
    
    if (blogChannel) {
      await checkBlogUpdates(blogChannel);
    }
  }, 60000); // Check every 60 seconds