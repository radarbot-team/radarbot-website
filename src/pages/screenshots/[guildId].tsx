import axios from 'axios';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { NavbarDasboard } from '../../components/NavbarDashboard';
import { PhotoCard } from '../../components/PhotoCard';
import { guildInfo } from '../../services/DiscordApi/GuildInfo';
import { memberGuilds } from '../../services/DiscordApi/MemberGuids';
import { IGuild } from '../../types/Guild';
import styles from './Screenshots.module.css';



type ScreenshotsData = {
  id: string;
  guildId: string;
  messageId: string;
  userId: string;
  votesCount: number;
  votes: {
    userVoteId: String;
  }[];
  content: string;
  alreadyTop: boolean;
  topMessageId: string;
  username: string;
  userAvatar: string;
  image: string;
  user: string;
  height: number;
  width: number;
}

export default function GuildScreenshots() {
  const router = useRouter();
  const [session, sessionLoading] = useSession();
  const [screenshots, setScreenshots] = useState<ScreenshotsData[] | null>(null);
  const [guild, setGuild] = useState<IGuild>();
  const [loading, setLoading] = useState(true);
  const { guildId }: any = router.query;
  // const { isAuthenticated } = useContext(AuthContext);


  useEffect(() => {
    axios.get(`/api/screenshots/fetchguildscreenshots?guildId=${guildId}`).then((res) => {
      setScreenshots(res.data);
      guildInfo.getGuildInfo(guildId).then((res) => {
        setGuild(res);
        setLoading(false);
      });
    })
  }, [guildId])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className={styles.outsidecontainer}>
      <NavbarDasboard />
      <div className={styles.container}>
        <header>
          <h2>Hello, welcome to {guild?.name} screenshots</h2>
        </header>
        <div className={styles.screenshots}>
          {
            screenshots && screenshots.map((screenshot) => {
              return (
                <PhotoCard
                  key={screenshot.id}
                  alreadyTop={screenshot.alreadyTop}
                  content={screenshot.content}
                  guildId={screenshot.guildId}
                  id={screenshot.id}
                  image={screenshot.image}
                  messageId={screenshot.messageId}
                  userId={screenshot.userId}
                  user={screenshot.user}
                  userAvatar={screenshot.userAvatar}
                  username={screenshot.username}
                  votesCount={screenshot.votesCount}
                  height={screenshot.height}
                  width={screenshot.width}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
