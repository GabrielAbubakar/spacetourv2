import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/navBar/navBar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.homeContainer}>
            <Navigation />
        
        </div>
    )
}

export default Home