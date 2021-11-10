import '../styles/globals.css'
import { supabase } from '../client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] = useState('not-authenticated')
  const router = useRouter()
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      handleAuthChange(event,session)
      if (event === 'SIGNED_IN') {
        setAuthenticatedState('authenticated')
        router.push('/profile')
      }
      if (event === 'SIGNED_OUT') {
        setAuthenticatedState('not-authenticated')
      }
    })
    checkUser()
    return () => {
      authListener.unsubscribe()
    }
  }, [])
  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session })
    })
  }
  async function checkUser() {
    const user = await supabase.auth.user()
    if (user) {
      setAuthenticatedState('authenticated')
    }
  }
  return (
  <div>
    <Head>
      <title>jcs.sol | by josh</title>
        <meta name="description" content="Building dApps for people and planet" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav style={navStyle}>
      <Link href="/">
        <a style={linkStyle}>🏠 Home</a>
      </Link>
      {
        authenticatedState === 'not-authenticated' && (
          <Link href="/sign-in">
            <a style={linkStyle}>🔐 Sign In</a>
          </Link>
        )
      }
      {
        authenticatedState === 'authenticated' && (
          <Link href="/portfolio">
            <a style={linkStyle}>💼 Portfolio</a>
          </Link>
        )
      }
      {
        authenticatedState === 'authenticated' && (
          <Link href="/profile">
            <a style={linkStyle}>📜 My Profile</a>
          </Link>
        )
      }
    </nav>

    <Component {...pageProps} />
    
    <footer className={styles.footer}>
      <a
        href="https://y.at/mushroom.kiwi-fruit.apple.avocado"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/jcs.svg" alt="jcs.sol Logo" width={44} height={16} />
        </span>
      </a>
    </footer>
    </div>
  )
}

const linkStyle = {
  marginRight: 10
}

const navStyle = {
  margin: 20
}
export default MyApp
