import botApi from "../botApi";


class GuildInfo {
  async getGuildInfo(guildId: string) {
    const response = await botApi.get('/guilds')

    const guilds = response.data;

    const guild = guilds.find(guild => guild.id === guildId);

    return guild;

  }
}

export const guildInfo = new GuildInfo();