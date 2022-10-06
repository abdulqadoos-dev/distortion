import styles from "./collaboration.module.scss"
import useTranslation from "next-translate/useTranslation";

const Collaboration = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>

            <div className={styles.heading}>
                <h1>Accompany us in disrupting the Gaming space</h1>
                <h3>Contact us</h3>
            </div>

            <div className={styles.items}>
                <div className={styles.item}>
                    <a href="mailto: streamer@distortion.gg"><img src="/images/icons/email.svg"/></a>
                    <p>streamer</p>
                </div>
                <div className={styles.item}>
                    <a href="mailto: ambassador@distortion.gg"><img src="/images/icons/email.svg"/></a>
                    <p>ambassador</p>
                </div>
                <div className={styles.item}>
                    <a href="mailto: partner@distortion.gg"><img src="/images/icons/email.svg"/></a>
                    <p>partner</p>
                </div>
            </div>
        </section>
    )
}

export default Collaboration