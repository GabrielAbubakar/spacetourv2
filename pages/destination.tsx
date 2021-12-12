import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navBar/navBar";
import styles from '../styles/destination.module.scss';



const Destination: NextPage = () => {

    return (
        <div className={styles.destinationContainer} >
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
                <title>Destinations</title>
            </Head>
            <Navigation />

            <main className={styles.destinationContent} >
                <h1><span>01</span>Pick your destination</h1>

                <article>

                    <figure className={styles.pictureBox}>
                        <div>
                            <Image src='/images/destination/image-moon.png' width={445} height={445} />
                        </div>
                    </figure>

                    <div className={styles.destinationText}>

                        <div className={styles.tabList}>
                            <button>Moon</button>
                            <button>Mars</button>
                            <button>Europa</button>
                            <button>Titan</button>
                        </div>
                        <h2>Moon</h2>
                        <p>
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>

                        <div className={styles.destinationDetails}>
                            <div>
                                <h3>Avg. Distance</h3>
                                <p>
                                    384,400 KM
                                </p>
                            </div>
                            <div>
                                <h3>Est. Travel Time</h3>
                                <p>
                                    3 Days
                                </p>
                            </div>
                        </div>

                    </div>

                </article>
            </main>

        </div>
    )
}

export default Destination;