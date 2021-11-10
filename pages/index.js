import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        👋 Welcome to <a href="https://twitter.com/JoshCStein">jcs.sol!</a>
      </h1>
      <p className={styles.description}>
        I am currently learning about{' '}
        <code className={styles.code}>theWorld/Of/Web3.js</code>
      </p>
    </main>
  </div> 
  )
}
