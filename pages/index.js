import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {users} from "../assets/js/data-users";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Time Tracker</title>
                <meta name="description" content="Track user's time"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Time Tracker
                </h1>

                <p className={styles['search-bar-wrapper']}>
                    <input className={styles['search-bar']} type="text" placeholder="Search user..."/>
                </p>

                <div className={styles.grid}>
                    {users.map((user, index) => {
                        return (
                            <Link href={`/user/${user.id}`} key={index}>
                                <a className={styles.card}>
                                    <h2>{user.name}</h2>
                                    <p>
                                        Time Tracker: Off
                                    </p>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    );
}
