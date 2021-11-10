import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        👋 Welcome to <a href="https://twitter.com/JoshCStein">jcs.sol!</a>
      </h1>
      <a href="/sign-in"><p className={styles.description}>
        <code className={styles.code}>🔐 Sign In</code>
        {' '} to see what I'm building
      </p></a>
    </main>
  </div> 
  )
}