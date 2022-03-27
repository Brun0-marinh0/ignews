import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
        <title>Home | ig.news</title>
    </Head>
    <main className={styles.contantContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, wellcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acess to all the publications <br />
          <span>for $9.90 month</span>
        </p>
      </section>
      <img src="/images/avatar.svg" alt="Girl Coding" />
    </main>
    </>
  )
}
