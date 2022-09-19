import styles from "./join.module.scss"
import buttonStyles from "../ui/button/button.module.scss";
import useTranslation from "next-translate/useTranslation";

const Join = () => {
    const {t, lang} = useTranslation('common')
    return (
        <section className={styles.container}>
            <div>
                <h1>Join for free now ! </h1>
                <p>Easy and secureEasy secure</p>
                <button className={buttonStyles.button}>{t('join-now')}</button>
            </div>
        </section>
    )
}

export default Join