import Image from 'next/image'
import styles from './crewComponent.module.scss'

const CrewComponent = ( {role, name, bio, image, children} : any) => {


    return (
        <article className={styles.article}>

            <div className={styles.crewText}>
                <h2>{role}</h2>
                <h3>{name}</h3>
                <p>
                    {bio}
                </p>
                <div className={styles.buttons}>
                    {/* <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                     */}
                     {children}
                </div>
            </div>
            <figure className={styles.pictureBox}>
                <Image src={image} width={400} height={600} alt='crew image' priority/>
            </figure>
        </article>
    )
}

export default CrewComponent;