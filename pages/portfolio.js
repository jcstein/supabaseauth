import { supabase } from '../client'
import styles from '../styles/Home.module.css'

export default function Profile({ user }) {
    console.log({ user })
return (
    <div style={{ margin: '1rem auto'}}>
     <main className={styles.main}>
       <h1 className={styles.title}>
         Welcome to <a href="https://twitter.com/JoshCStein">jcs.sol!</a>
       </h1>
       <p className={styles.description}>
         I am currently learning about{' '}
         <code className={styles.code}>theWorld/Of/Web3.js</code>
       </p>
       <div className={styles.grid}>
         <a href="https://veggie-portal.jcstein.repl.co" className={styles.card}>
           <h2>Web3 App &rarr;</h2>
           <p>My first Web3 dApp with a Smart Contract on the Ethereum blockchain.</p>
         </a>
         <a href="https://web3.jcstein.dev" className={styles.card}>
           <h2>NFT Minting &rarr;</h2>
           <p>Limited Edition NFT Minting dApplication on ETH Rinkeby network.</p>
         </a>
         <a
           href="https://minting.jcstein.dev"
           className={styles.card}
         >
           <h2>Game &rarr;</h2>
           <p>Built on the Ethereum Blockchain.</p>
         </a>
         <a
           href="https://game.jcstein.dev"
           className={styles.card}
         >
           <h2>Solana &rarr;</h2>
           <p>
             My first dApp on Solana Blockchain.
           </p>
         </a>
         <a
           href="https://jcstein.dev"
           className={styles.card}
         >
           <h2>More &rarr;</h2>
           <p>
             Browse my full portfolio.
           </p>
         </a>
       </div>
     </main>
   </div>
    ) 
}

export async function getServerSideProps({ req }) {
    const { user } = await supabase.auth.api.getUserByCookie(req)

    if (!user) {
        return { props: {}, redirect: { destination: '/sign-in'}}
    }

    return { props: { user }}
}