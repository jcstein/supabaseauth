import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Profile() {
    const [profile, setProfile] = useState(null)
    const router = useRouter()

    useEffect(() => {
        fetchProfile()
    }, [])

    async function fetchProfile() {
        const profileData = await supabase.auth.user()
        if (!profileData) {
            router.push('/sign-in')
        } else {
            setProfile(profileData)
        }
    }

    async function signOut() {
        await supabase.auth.signOut()
        router.push('/sign-in')
    }

    if (!profile) return null
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h2> Hello, {profile.email}</h2>
            <p>User ID: {profile.id}</p>
            <button className={styles.button} onClick={signOut}>Sign Out</button>
        </main>
        </div>
    )
}