import { Client } from 'discord.js';

export const getGuild = (client: Client<true>) => {
  const guild = client.guilds.cache.get(process.env.DISCORD_GUILD);
  console.log(`[i] ${guild.name} (${guild.id}) 서버에서 작업할게요.`);
  return guild;
};
