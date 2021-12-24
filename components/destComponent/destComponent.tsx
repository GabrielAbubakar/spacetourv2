import { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image'
import styles from './destComponent.module.scss'


const DestContainer = ( {image, planet, content, distance, time, children}: any ) => {

    return (
        <article className={styles.article}>
            <figure className={styles.pictureBox}>
                        <div>
                            <Image src={image} width={445} height={445} alt="planet image" priority/>
                        </div>
                    </figure>

                    <div className={styles.destinationText}>

                        <div className={styles.tabList}>
                            {children}
                            {/* <button>Moon</button>
                            <button>Mars</button>
                            <button>Europa</button>
                            <button>Titan</button> */}
                        </div>
                        <h2>{planet}</h2>
                        <p>
                            {content}
                        </p>

                        <div className={styles.destinationDetails}>
                            <div>
                                <h3>Avg. Distance</h3>
                                <p>
                                    {distance}
                                </p>
                            </div>
                            <div>
                                <h3>Est. Travel Time</h3>
                                <p>
                                    {time}
                                </p>
                            </div>
                        </div>

                    </div>
        </article>
    )
}

export default DestContainer;