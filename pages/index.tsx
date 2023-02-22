import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Image1 from "../public/images/1.jpeg";
import Image2 from "../public/images/2.jpeg";
import Image3 from "../public/images/3.jpeg";
import Image4 from "../public/images/4.jpeg";
import Image5 from "../public/images/5.jpeg";
import Image6 from "../public/images/6.jpeg";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Park View Market</title>
        <meta name="description" content="Park View Market" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={inter.className}>Park View Market</h1>
          <h2 className={inter.className}>1091 North Park Drive, Pixley, CA, 93256</h2>
          <p className={inter.className}>Operated by: Sidhu G inc.</p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.imageWrapper}>
            <Image src={Image1}  alt="an image of Park View Market" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={Image2}  alt="an image of Park View Market" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={Image3}  alt="an image of Park View Market" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={Image4}  alt="an image of Park View Market" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={Image5}  alt="an image of Park View Market" />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={Image6}  alt="an image of Park View Market" />
          </div>
        </div>
      </main>
    </>
  )
}
