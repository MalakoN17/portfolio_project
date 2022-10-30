import Head from 'next/head'
import Image from 'next/image'
import About from '../components/main/About/About'
import Main from '../components/main/Main'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Projects from '../components/Projects/Projects'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Malako Nagato || Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Projects />
    </div>
  )
}
