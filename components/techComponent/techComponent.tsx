import Image from 'next/image'
import styles from './techComponent.module.scss'

const TechComponent = ( {name, image, description, children}: any ) => {

    return (
        
        <article className={styles.article}>
                    <div className={styles.backImage}>

                    </div>
                    
                    <div className={styles.buttonList}>
                        {/* <button>1</button>
                        <button>2</button>
                        <button>3</button> */}
                        {children}
                    </div>

                    <div className={styles.techText}>
                        <h2>THE TERMINOLOGY…</h2>
                        <h3>{name}</h3>
                        <p>
                            {description}
                        </p>

                    </div>
                    <figure className={styles.pictureBox}>
                        <Image src={image} width={515} height={523} alt='tech image'/>
                    </figure>
        </article>
    )
}

export default TechComponent;