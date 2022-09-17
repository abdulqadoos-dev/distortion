import styles from "./journey.module.scss"
import buttonStyles from "../ui/button/button.module.scss"
import useTranslation from "next-translate/useTranslation";

const Journey = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h3>Distortion is a community app that increase your </h3>
                <h1>gaming experiences</h1>
            </div>
            <div className={styles.banner}>
                <div className={styles.content}>
                    <h1>Start your <br/> esport journey</h1>
                    <p>Try Distortion today and discover the futures of esportTry esport</p>
                    <button className={buttonStyles.button}>{t('join-now')}</button>
                </div>
                <div className={styles.image}>
                    <img src="/images/experience.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Journey