import { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image'
import styles from './navBar.module.scss'


const Navigation: NextPage = () => {

    return (
        <nav className={styles.navigationBar}>

            <div className={styles.logo}>
                <Image src="/images/shared/logo.svg" width={48} height={48} alt="main logo" />
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

            {/* <div className={styles.go} >
                <Image src="/images/shared/icon-hamburger.svg" height={24} width={21} className={styles.god}/>
            </div> */}
        </nav>
    )
}

export default Navigation;