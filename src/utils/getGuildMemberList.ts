import { Guild } from 'discord.js';

export const getGuildMemberList = async (guild: Guild, after?: string) => {
  const members = await guild.members.list({ limit: 1000, after });

  console.log(`[i] ${guild.memberCount}명의 서버 유저가 있고, ${members.size}명을 리스트에 담았어요.\n`);

  if (guild.memberCount !== members.size) {
    console.log(`\n[!] 서버 인원이 너무 많아 모든 사용자를 리스트에 담지 못했어요.`);
    console.log(`[!] 모든 인원의 처리가 필요한 경우, 스크립트를 여러 번 실행해야 할 수도 있어요!\n`);
  }

  return members;
};
