import axios from "axios";
import { parseCookies } from "nookies";

import { IGuild } from "../../types/Guild";


class MemberGuilds {
  async handle() {
    const { 'rb.token': token } = parseCookies();

    const response = await axios.get('https://discord.com/api/users/@me/guilds', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).catch(() => null);

    return response?.data || null;
  }

  async getGuildInfo(guildId: string) {
    const { 'rb.token': token } = parseCookies();

    const response = await axios.get(`https://discord.com/api/users/@me/guilds`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).catch(() => null)
    console.log(response)
    const guilds : IGuild[] = response?.data || null;

    const guild : IGuild | undefined = guilds?.find(guild => guild.id === guildId);

    return guild;
  }

}

export const memberGuilds = new MemberGuilds();