import styles from "./banner.module.scss"
import useTranslation from "next-translate/useTranslation";

const Banner = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>{t('Welcome')}</h1>
                <p>to the distortion</p>
            </div>
        </section>
    )
}

export default Banner