import styles from "./collaboration.module.scss"
import useTranslation from "next-translate/useTranslation";

const Collaboration = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>

            <div className={styles.heading}>
                <h1>Do you want to know more about collaboration ?</h1>
                <h3>Contact us</h3>
            </div>

            <div className={styles.items}>
                <div className={styles.item}>
                    <a href="mailto: streamer@distortion.gg,ambassador@distortion.gg,partner@distortion.gg"><img src="/images/icons/email.svg"/></a>
                    <p>steamer</p>
                </div>
                <div className={styles.item}>
                    <a href="mailto: streamer@distortion.gg,ambassador@distortion.gg,partner@distortion.gg"><img src="/images/icons/email.svg"/></a>
                    <p>ambassador</p>
                </div>
                <div className={styles.item}>
                    <a href="mailto: streamer@distortion.gg,ambassador@distortion.gg,partner@distortion.gg"><img src="/images/icons/email.svg"/></a>
                    <p>partner</p>
                </div>
            </div>
        </section>
    )
}

export default Collaboration