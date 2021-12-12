import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navBar/navBar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        
        <div className={styles.homeContainer}>

            <Navigation />

            <div className={styles.containerFlex}>

                <div className={styles.containerContent}>
                    <h1>So, you want to travel to <span>Space</span></h1>
                    <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! 
                    </p>
                </div>

                <div className={styles.exploreButton}>
                    <Link href="/destination" >
                        <a>Explore</a>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Home