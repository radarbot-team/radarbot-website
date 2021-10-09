import type { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
import botApi from '../../../services/botApi';

type Data = {
  name?: string
  error?: string
  managedGuilds?: string[]
  dashboardGuilds?: string[]
}

type IBotGuilds = [
  {
    id: string
    name: string
    icon: string
    iconWebp: string
    ownerId: string
    member: number
    channels: number
    createdAt: string
  }
]

type IGuilds = [
  {
    id: string
    name: string
    icon: string
    owner: boolean
    permissions: number
    features: string[]
    permissions_new: string
  }
]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Missing Authorization header' });

  }

  const botGuilds : IBotGuilds = (await botApi.get('/guilds')).data

  const guilds : IGuilds = (await axios.get('https://discord.com/api/users/@me/guilds', {
    headers: {
      authorization
    }
  })).data

  if (!guilds) {
    return res.status(401).json({
      error: 'Unauthorized'
    })
  }

  // Return only managed guilds where RadarBot is in
  const managedGuilds : any = guilds.filter((guild) => botGuilds.find((botGuild) => (botGuild.id === guild.id) && (guild.permissions & 0x20) === 0x20))

  // Return both managed guilds and guilds match to user edit Screenshots center
  const bothGuilds = guilds.filter((guild) => botGuilds.find((botGuild) => (botGuild.id === guild.id)))

  const dashboardGuilds : any = bothGuilds.map((guild) => {
    if (botGuilds.find((botGuild) => (botGuild.id === guild.id) && (guild.permissions & 0x20) === 0x20)) {
      return {
        ...guild,
        editPermissions: true
      }
    } else {
      return {
        ...guild,
        editPermissions: false
      }
    }
  })
  
  return res.status(200).json({
    dashboardGuilds
  })
}