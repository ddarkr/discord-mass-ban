import { Collection, GuildMember } from 'discord.js';

export const banNicknameStartsWith = (members: Collection<string, GuildMember>, nicknameStart: string) => {
  members.map(async member => {
    if (member.user.username.startsWith(nicknameStart)) {
      await member.ban();
      console.log(
        `[i] ${member.user.id} (${member.user.username})을 밴 했습니다. (닉네임이 "${nicknameStart}"로 시작)`,
      );
    }
  });
};
