import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { users } from "../assets/js/data-users";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
    const usersTracker = useSelector(state => state.tracker);

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
                        const userTrack = usersTracker.find(userTracker => userTracker.id == user.id);

                        return (
                            <Link href={`/user/${user.id}`} key={index}>
                                <a className={styles.card}>
                                    <h2>{user.name}</h2>
                                    <p>
                                        Time Tracker: {userTrack.isTrackerActive ? 'On' : 'Off'}
                                    </p>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://itumulak.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Authored by Ian Tumulak
                </a>
            </footer>
        </div>
    );
}
