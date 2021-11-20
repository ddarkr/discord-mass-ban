# discord-mass-ban

> 디스코드의 봇 기능을 이용하여 디스코드 서버의 유저를 대량 삭제할 수 있게 도와드려요.

## 제작 계기

운영하는 서버가 봇에 의한 사용자 테러를 당해서 제작하게 되었어요.

## 사용법?

사용을 위해서는 다음과 같은 의존성이 필요합니다.

- node 14 이상
- yarn (npm도 가능은 하나 yarn 권장)

1. 의존성을 설치해줍니다.

   ```bash
   yarn install
   ```

2. 상단 경로에 있는 `.env.example` 파일을 복사해 `.env`을 만들어주세요.

   ```bash
   cp .env.example .env
   ```

3. `.env` 안에 있는 내용을 알맞게 수정합니다.

   - `DISCORD_TOKEN` - Discord Applications, Bot의 토큰입니다.
   - `DISCORD_GUILD` - 길드의 ID 값입니다. 보통은 디스코드 `/channels/` 뒤에 있는 숫자가 길드의 ID입니다.

4. `src/app.ts` 파일을 필요에 맞게 수정하세요.
5. 스크립트 시작은 yarn을 통해서 할 수 있습니다.

   ```bash
   yarn start
   ```

### 🐤 필요한 설정

- 봇에게 **유저 관리 권한**을 재량껏 부여하시기 바랍니다.

## 주의

- 원저작자는 해당 프로젝트를 사용함으로써 발생하는 일에 대한 책임을 지지 않습니다.
