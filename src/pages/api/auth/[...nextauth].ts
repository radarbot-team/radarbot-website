import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    (Providers as any).Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      scope: "identify email guilds",
      async profile(profile: any, tokens: any) {
        
        if (profile.avatar === null) {
          const defaultAvatarNumber = parseInt(profile.discriminator) % 5
          profile.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`
        } else {
          const format = profile.avatar.startsWith("a_") ? "gif" : "png"
          profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${format}`
        }

        const userExists = await prisma.users.findFirst({
          where: {
            userDiscordId: profile.id
          }
        })

        if (!userExists) {
          await prisma.users.create({
            data: {
              email: profile.email,
              userDiscordId: profile.id,
              acessToken: tokens.accessToken,
            }
          })
        } else {
          await prisma.users.update({
            where: {
              userDiscordId: profile.id
            },
            data: {
              acessToken: tokens.accessToken,
            }
          })
        }
        global.accessToken = tokens.accessToken
        return {
          id: profile.id,
          name: profile.username,
          image: profile.image_url,
          email: profile.email,
        }
      },
    }),
  ],

  callbacks: {
    async redirect(url, baseUrl) {
      return baseUrl + "/dashboard"
    },
    async session(session, user) {
      return {
        ...session,
        token: global.accessToken
      }
    }
  }
})