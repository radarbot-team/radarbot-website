import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Analytics } from '../components/Analytics'
import { Features } from '../components/Features'
import { MainPage } from '../components/MainPage'
import { Navbar } from '../components/Navbar'
import { Support } from '../components/Support'
import styles from '../styles/pages/Home.module.css'
import { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
        
      setIsLoading(false);
    }, 2000)
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
