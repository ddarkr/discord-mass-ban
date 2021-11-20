import { Collection, GuildMember } from 'discord.js';

export const banJoinedDateMatched = (
  members: Collection<string, GuildMember>,
  year: number,
  month: number,
  date: number,
) => {
  members.map(async member => {
    if (
      member.joinedAt.getUTCFullYear() === year &&
      member.joinedAt.getUTCMonth() === month - 1 &&
      member.joinedAt.getDate() === date
    ) {
      await member.ban();
      console.log(
        `[i] ${member.user.id} (${
          member.user.username
        })을 밴 했습니다. (서버 가입: ${member.joinedAt.getUTCFullYear()}.${
          member.joinedAt.getUTCMonth() + 1
        }.${member.joinedAt.getDate()})`,
      );
    }
  });
};
