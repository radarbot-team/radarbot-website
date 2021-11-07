import axios from 'axios';
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { NavbarDasboard } from '../../components/NavbarDashboard';
import GetMemberInfo from '../../services/DiscordApi/GetMemberInfo';
import styles from './Dashboard.module.css';
import { ServerCard } from '../../components/ServerCard';
import colors from '../../data/colors.json';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

type IGuild = {
  features: string[];
  icon: string;
  id: string;
  name: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
  editPermissions: boolean;
}

export default function Dashboard() {
  const [session, loading] = useSession();
  const [userAvatar, setUserAvatar] = useState<string>('');
  const [managedGuilds, setManagedGuilds] = useState([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    signIn().then(() => fetchGuilds());
    
  }, []);

  const { isAuthenticated, signIn } = useContext(AuthContext);

  async function fetchGuilds() {
    const { token } = await (await axios.get('/api/auth/session')).data;
    console.log(token)
    axios.get('/api/@me/managedguilds', {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setManagedGuilds(res.data.dashboardGuilds);
      GetMemberInfo(token).then((member) => {
        setUserAvatar(member.avatar);
        setIsLoading(false);
      })
    }).catch(() => Router.push('/'))
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (!isAuthenticated) {
    return (
      Router.push('/')
    )
  }
  return (
    <div className={styles.outsideContainer}>
      <NavbarDasboard />
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.title}>
            <strong>Hi, {session?.user?.name}</strong>
          </div>
          <div className={styles.description}>
            <p>
              Welcome to RadarBot dashboard. Here you can manage your guilds and access screenshots center.
            </p>
          </div>
        </div>
        <strong>Choose a server</strong>
        <div className={styles.servers}>
          {
            managedGuilds && managedGuilds.map((guild: IGuild) => (

              <ServerCard
                color={colors[Math.floor(Math.random() * colors.length)]}
                key={guild.id}
                icon={guild.icon}
                id={guild.id}
                name={guild.name}
                owner={guild.owner}
                permissions={guild.permissions}
                permissions_new={guild.permissions_new}
                canEdit={guild.editPermissions}
              />

            ))
          }
        </div>
      </div>
    </div>
  )
}