import Discord, { Intents } from 'discord.js';
import { banJoinedDateMatched, banNicknameStartsWith } from './scripts';
import { getGuild, getGuildMemberList } from './utils';

require('dotenv').config();

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', async client => {
  if (client.user) {
    console.log(`[i] "${client.user.tag}"으로 로그인했습니다.\n`);
    client.user.setPresence({
      status: 'dnd', // Do not disturb
      activities: [{ name: '유저 대량 삭제' }],
    });
  }

  const guild = getGuild(client);
  const members = await getGuildMemberList(guild);

  banJoinedDateMatched(members, 2021, 11, 21);
  // banNicknameStartsWith(members, 'BOT');
});

client.login(process.env.DISCORD_TOKEN);
