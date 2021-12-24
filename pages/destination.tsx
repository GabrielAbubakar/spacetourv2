import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import DestContainer from "../components/destComponent/destComponent";
import Navigation from "../components/navBar/navBar";
import styles from '../styles/destination.module.scss';



const Destination: NextPage = () => {

    const destinations: any = [
        {
            name: "Moon",
            images: {
              png: "/images/destination/image-moon.png",
              webp: "/images/destination/image-moon.webp"
            },
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travel: "3 days"
        },

        {
            name: "Mars",
            images: {
              png: "/images/destination/image-mars.png",
              webp: "/images/destination/image-mars.webp"
            },
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travel: "9 months"
        },

        {
            name: "Europa",
            images: {
              png: "/images/destination/image-europa.png",
              webp: "/images/destination/image-europa.webp"
            },
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: "3 years"
        },

        {
            name: "Titan",
            images: {
              png: "/images/destination/image-titan.png",
              webp: "/images/destination/image-titan.webp"
            },
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travel: "7 years"
        }
    ]

    const [index, setIndex] = useState(0)
    //const [activeTab, setActiveTab] = useState(0)

    const updateIndex = (e: any) => {
        setIndex(parseInt(e.target.id))
    }
    

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

                <DestContainer  image={destinations[index].images.webp} 
                                planet={destinations[index].name}
                                content={destinations[index].description}
                                distance={destinations[index].distance}
                                time={destinations[index].travel}>

                    <button onClick={updateIndex} id="0" className={index === 0 ? `${styles.button} ${styles.active}` : `${styles.button}` }>Moon</button>
                    <button onClick={updateIndex} id="1" className={index === 1 ? `${styles.button} ${styles.active}` : `${styles.button}`}>Mars</button>
                    <button onClick={updateIndex} id="2" className={index === 2 ? `${styles.button} ${styles.active}` : `${styles.button}`}>Europa</button>
                    <button onClick={updateIndex} id="3" className={index === 3 ? `${styles.button} ${styles.active}` : `${styles.button}`}>Titan</button>
                </DestContainer>

            </main>

        </div>
    )
}

export default Destination;