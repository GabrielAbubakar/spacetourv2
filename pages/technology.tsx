import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navigation from "../components/navBar/navBar";
import TechComponent from "../components/techComponent/techComponent";
import styles from '../styles/technology.module.scss';



const Technology: NextPage = () => {

    const technology: any = [
        {
            name: "Launch vehicle",
            images: {
              portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
              landscape: "/images/technology/image-launch-vehicle-landscape.jpg"
            },
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            name: "Spaceport",
            images: {
              portrait: "/images/technology/image-spaceport-portrait.jpg",
              landscape: "/images/technology/image-spaceport-landscape.jpg"
            },
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            name: "Space capsule",
            images: {
              portrait: "/images/technology/image-space-capsule-portrait.jpg",
              landscape: "/images/technology/image-space-capsule-landscape.jpg"
            },
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

    const [index, setIndex] = useState(0)
    //const [activeTab, setActiveTab] = useState(0)

    const updateIndex = (e: any) => {
        setIndex(parseInt(e.target.id))
    }

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

                <TechComponent name={technology[index].name}
                                image={technology[index].images.portrait}
                                description={technology[index].description}>
                    
                    <button onClick={updateIndex} id="0" className={index === 0 ? `${styles.button} ${styles.active}` : `${styles.button}`} >1</button>
                    <button onClick={updateIndex} id="1" className={index === 1 ? `${styles.button} ${styles.active}` : `${styles.button}`}>2</button>
                    <button onClick={updateIndex} id="2" className={index === 2 ? `${styles.button} ${styles.active}` : `${styles.button}`}>3</button>
                </TechComponent>

                {/* <article>
                    
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
                </article> */}

            </main>

        </div>
    )
}

export default Technology;