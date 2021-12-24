import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CrewComponent from "../components/crewComponent/crewComponent";
import Navigation from "../components/navBar/navBar";
import styles from '../styles/crew.module.scss';
import { useState } from "react";



const Crew: NextPage = () => {

    const crew = [
        {
            name: "Douglas Hurley",
            images: {
              png: "/images/crew/image-douglas-hurley.png",
              webp: "/images/crew/image-douglas-hurley.webp"
            },
            role: "Commander",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            name: "Mark Shuttleworth",
            images: {
              png: "/images/crew/image-mark-shuttleworth.png",
              webp: "/images/crew/image-mark-shuttleworth.webp"
            },
            role: "Mission Specialist",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            name: "Victor Glover",
            images: {
              png: "/images/crew/image-victor-glover.png",
              webp: "/images/crew/image-victor-glover.webp"
            },
            role: "Pilot",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            name: "Anousheh Ansari",
            images: {
              png: "/images/crew/image-anousheh-ansari.png",
              webp: "/images/crew/image-anousheh-ansari.webp"
            },
            role: "Flight Engineer",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]

    const [index, setIndex] = useState(0)
    //const [activeTab, setActiveTab] = useState(0)

    const updateIndex = (e: any) => {
        setIndex(parseInt(e.target.id))
    }

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

                <CrewComponent name={crew[index].name}
                                role={crew[index].role}
                                bio={crew[index].bio}
                                image={crew[index].images.webp}
                                >
                    <button onClick={updateIndex} id="0" className={index === 0 ? `${styles.button} ${styles.active}` : `${styles.button}`}></button>
                    <button onClick={updateIndex} id="1" className={index === 1 ? `${styles.button} ${styles.active}` : `${styles.button}`}></button>
                    <button onClick={updateIndex} id="2" className={index === 2 ? `${styles.button} ${styles.active}` : `${styles.button}`}></button>
                    <button onClick={updateIndex} id="3" className={index === 3 ? `${styles.button} ${styles.active}` : `${styles.button}`}></button>
                </CrewComponent>

                {/* <article>

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
                </article> */}
            </main>

        </div>
    )
}

export default Crew;