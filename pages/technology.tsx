import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navBar/navBar";
import styles from '../styles/technology.module.scss';



const Technology: NextPage = () => {

    return (
        <div className={styles.techContainer}>
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
                <title>Technology</title>
            </Head>

            <Navigation />

            <main className={styles.techContent}>
                <h1><span>03</span>Space Launch 101</h1>

                <article>
                    
                    <div className={styles.backImage}>

                    </div>
                    
                    <div className={styles.buttonList}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>

                    <div className={styles.techText}>
                        <h2>THE TERMINOLOGY…</h2>
                        <h3>LAUNCH VEHICLE</h3>
                        <p>
                            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                        </p>

                    </div>
                    <figure className={styles.pictureBox}>
                        <Image src='/images/technology/image-launch-vehicle-portrait.jpg' width={515} height={523}/>
                    </figure>
                </article>

            </main>

        </div>
    )
}

export default Technology;