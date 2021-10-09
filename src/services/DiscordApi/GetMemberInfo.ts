import axios from 'axios';


export default async function GetMemberInfo(token: string) {
  const response = await axios.get(`https://discord.com/api/users/@me`, {
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
  return {
    data: response.data,
    avatar: `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.png`
  }
}