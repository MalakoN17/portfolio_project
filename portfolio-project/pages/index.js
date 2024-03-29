import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/main/Main'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Malako Nagato || Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </div>
  )
}
