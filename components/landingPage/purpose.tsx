import useTranslation from "next-translate/useTranslation";
import styles from "./purpose.module.scss"
import buttonStyles from "../ui/button/button.module.scss";

const Purpose = () => {
    const {t, lang} = useTranslation('common')
    return (
        <section className={styles.container}>
            <div>
                <h1>Play with purpose </h1>
                <h3>winning or losing depends on you.</h3>
                <p>Your final clutch, the pixel perfect ultimate, the timed</p>
                <p> flashbang will grant you more than victory.</p>
                <button className={buttonStyles.button}>{t('join-now')}</button>
            </div>
        </section>
    )
}

export default Purpose