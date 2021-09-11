import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Analytics } from '../components/Analytics'
import { Features } from '../components/Features'
import { MainPage } from '../components/MainPage'
import { Navbar } from '../components/Navbar'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> RadarBot </title>
      </Head>
      <Navbar />
      <MainPage />
      <Features />
      <Analytics />
    </div>
  )
}
