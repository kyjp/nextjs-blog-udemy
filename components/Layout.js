import Head from "next/head"
import styles from './Layout.module.css'
import utilsStyles from '../styles/utils.module.css'
import Link from "next/link"

const name = 'Shin Code'
export const siteTitle = 'Next.js blog'

function layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`} src="/images/profile.png" />
            <h1 className={utilsStyles.heading2xl}>{name}</h1>
          </>
        ) : (
          <>
            <img className={utilsStyles.borderCircle} src="/images/profile.png" />
            <h1 className={utilsStyles.heading2xl}>{name}</h1>
          </>
        )}
      </header>
      <main>
        {children}
        {!home &&
          <div><Link href="/">← ホームへ戻る</Link></div>
        }
      </main>
    </div>
  );
}

export default layout
