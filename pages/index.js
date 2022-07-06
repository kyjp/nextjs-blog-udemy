import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilsStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import { getPostsData } from '../lib/post'
import Head from 'next/head'

export async function getStaticProps() {
  const allPostsData = getPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilsStyles.headingMd}>私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavascriptです</p>
        <section>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            {
              allPostsData.map(({ id, title, date, thumbnail }) => (
                <article key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <img className={styles.thumbnailImage} src={thumbnail} alt={title} />
                    </a>
                  </Link>
                  <Link href={`/posts/${id}`}>
                    <a className={utilsStyles.boldText}>
                      {title}
                    </a>
                  </Link>
                  <br />
                  <small className={utilsStyles.lightText}>{date}</small>
                </article>
              ))
            }
          </div>
        </section>
      </section>
    </Layout >
  )
}
