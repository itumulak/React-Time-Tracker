import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styleSwitch from "../../styles/Switch.module.css";
import {users} from "../../assets/js/data-users";

export const getStaticPaths = async () => {
    const paths = users.map((user) => {
        return {
            params: {
                id: user.id.toString()
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    return {
        props: {
            id: params.id
        }
    }
}

const User = ({id}) => {
    const userData = JSON.parse(JSON.stringify(users));
    const user = userData.find(user => user.id == id);

    return (
        <div className={styles.container}>
            <Head>
                <title>Time Tracker | User</title>
                <meta name="description" content="Track user's time"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={`${styleSwitch.grid}`}>
                    <Link href="/">
                        <a>Back</a>
                    </Link>
                    <div className={`${styleSwitch.card}`}>
                        <h1 className={styles.title}>
                            {user.name}
                        </h1>
                        <hr/>
                        <div className={styleSwitch['switch-wrapper']}>
                            <label className={styleSwitch.switch}>
                                <input type="checkbox"/>
                                <div className={styleSwitch.slider}></div>
                            </label>
                            Enable Tracker
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default User;



