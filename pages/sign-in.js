import { useState } from 'react'
import { supabase } from '../client'
import styles from '../styles/Home.module.css'

export default function SignIn () {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    async function signIn() {
        if (!email) return
        const { error, data } = await supabase.auth.signIn({
            email
        })
        if (error) {
            console.log({ error })
        } else {
            setSubmitted(true)
        }
    }
    if (submitted) {
        return (
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1 className={styles.subtitle}>📧 check your email to sign in</h1>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    sign in with your email
                </h1>
                <input className={styles.input}
                    onChange={e => setEmail(e.target.value)}
                    style={{ margin: 10 }}
                />
                <button className={styles.button} onClick={() => signIn()}>Sign In</button>
            </main>
        </div>
    )
}