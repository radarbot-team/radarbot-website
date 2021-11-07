import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import { Analytics } from '../components/Analytics'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Loading } from '../components/Loading'
import { MainPage } from '../components/MainPage'
import { Navbar } from '../components/Navbar'
import { Support } from '../components/Support'
import { Testimonials } from '../components/Testimonials'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 0)
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title> RadarBot </title>
      </Head>
      <Navbar />
      <MainPage />
      <Features />
      <Analytics />
      <Testimonials />
      <Support />
      <Footer />
    </div>
  )
}
