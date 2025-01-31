import { GuildMember } from 'discord.js';

export default function handleGuildMemberAdd(member: GuildMember) {
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === 'welcome'
  );
  if (welcomeChannel && welcomeChannel.isTextBased()) {
    welcomeChannel.send(`Welcome to the server, ${member.user.username}!`);
  }
}