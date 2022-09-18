import styles from "./experiences.module.scss"
import useTranslation from "next-translate/useTranslation";

const Experience = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>

            <div className={styles.heading}>u
                <h1>Get the pro experience</h1>
                <p>Distortions provides the infrastructure to  create challenges, skills, visibility, earnings and emotions.</p>
            </div>

            <div className={styles.tabs}>
                <div className={styles.header}>
                    <div className={styles.item}>
                        
                    </div>
                </div>
                <div className={styles.content}></div>
            </div>
        </section>
    )
}

export default Experience