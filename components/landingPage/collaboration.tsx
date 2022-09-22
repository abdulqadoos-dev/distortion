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
                    <img src="/images/icons/email.svg"/>
                    <p>steamer</p>
                </div>
                <div className={styles.item}>
                    <img src="/images/icons/email.svg"/>
                    <p>ambassador</p>
                </div>
                <div className={styles.item}>
                    <img src="/images/icons/email.svg"/>
                    <p>partner</p>
                </div>
            </div>
        </section>
    )
}

export default Collaboration