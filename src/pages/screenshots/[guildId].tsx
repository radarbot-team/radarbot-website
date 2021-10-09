import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';

import { NavbarDasboard } from '../../components/NavbarDashboard';
export default function GuildScreenshots() {
  const router = useRouter();
  const [ screenshots, setScreenshots ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fecthGuildScreenshots().then((data) => {
      setScreenshots(data);
      setLoading(false);
      console.log(screenshots)
    })
  }, [])

  const { guildId } : any = router.query;

  async function fecthGuildScreenshots() {
    const response = await (axios as any).get(`/api/screenshots/fetchguildscreenshots?guildId=${guildId}`)

    return response.data;
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <NavbarDasboard />
    </div>
  )
}