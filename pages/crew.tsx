import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navBar/navBar";
import styles from '../styles/crew.module.scss';



const Crew: NextPage = () => {

    return (
        <div className={styles.crewContainer}>
            <Head>
                <meta name="description" content="Making space travel accessible for everyone" />
                <meta name="keywords" content="space, Space Travel, travel, planets" />
                <meta name="author" content="Gabriel Abubakar" />
                <meta property="og:title" content="Space Tourism" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Space Tourism" />
                <meta property="og:url" content="www.spacetourism.com" />
                {/* <meta property="og:image" content="/favicon.ico" />
                <meta property="og:image:type" content="image/ico" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="1200" /> */}
                <meta property="og:locale" content="en_US" />
                <title>Crew</title>
            </Head>

            <Navigation />

            <main className={styles.crewContent}>
                <h1><span>02</span>Meet your Crew</h1>

                <article>

                    <div className={styles.crewText}>
                        <h2>Commander</h2>
                        <h3>Douglas Hurley</h3>
                        <p>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                        </p>
                        <div className={styles.buttons}>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                    <figure className={styles.pictureBox}>
                        <Image src="/images/crew/image-douglas-hurley.png" width={400} height={600}/>
                    </figure>
                </article>
            </main>

        </div>
    )
}

export default Crew;