import axios from 'axios';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';

export default function Dashboard() {
  const [ session, loading ] = useSession();
  const [ content, setContent] = useState();
  const [ isLoading, setIsLoading ] = useState<Boolean>(true);

  useEffect(() => {
    fetchGuilds();
    setTimeout(() => {
        
      setIsLoading(false);
    }, 0)
  }, [])

  function fetchGuilds() {
    axios.get('/api/@me/managedguilds', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      console.log(res.data)
    })
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }
  
  if (!session) {
    return (
      <div>
        {
          localStorage.removeItem('token')
        }
        <p>You are not logged in.</p>
      </div>
    )
  }
  return (
    <div>
      {localStorage.setItem("token", (session as any).token)}
      <h1>Dashboard</h1>
      <p>{session.user?.email}</p>
    </div>
  )
}