import { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image'
import styles from './navBar.module.scss'
import ham from '../../public/images/shared/icon-hamburger.svg'
import { useState } from "react";



const Navigation: NextPage = () => {

    const [tabOpen, setTabOpen] = useState(false);

    const handleShit = () => {

        if (tabOpen === false) {
            setTabOpen(true)
        } else {
            setTabOpen(false)
        }
        console.log(tabOpen);
    }

    return (
        <nav className={styles.navigationBar}>

            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Image src="/images/shared/logo.svg" width={48} height={48} alt="main logo" />
                    </a>
                </Link>
            </div>


            <ul className={styles.navigation}>
                <li>
                    <Link href="/">
                        <a>
                            <span>00</span>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/destination">
                        <a>
                            <span>01</span>
                            Destination
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/crew">
                        <a>
                            <span>02</span>
                            Crew
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/technology">
                        <a>
                            <span>03</span>
                            Technology
                        </a>
                    </Link>
                </li>
            </ul>

            
            {/* Hamburger */}
            <div className={styles.hamburger} onClick={handleShit}>
                {/* <Image src="/images/shared/icon-hamburger.svg" height={24} width={30} className={styles.god} alt="hamburger "/> */}
                <Image src={tabOpen === false ? "/images/shared/icon-hamburger.svg" : "/images/shared/icon-close.svg"} 
                        height={28} 
                        width={28} 
                        className={styles.god} 
                        alt="hamburger "/>
            </div>

            {/* Mobile Navigation */}
            <ul className={tabOpen === true ? `${styles.navigationMobile} ${styles.flex}` : `${styles.navigationMobile}`}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/destination">
                        <a>Destination</a>
                    </Link>
                </li>
                <li>
                    <Link href="/crew">
                        <a>Crew</a>
                    </Link>
                </li>
                <li>
                    <Link href="/technology">
                        <a>Technology</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;