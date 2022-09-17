import useTranslation from "next-translate/useTranslation";
import styles from "./purpose.module.scss"

const Purpose = () => {
    const {t, lang} = useTranslation('common')
    return (
        <section className={styles.container}>
            <div>
                <h1>Play with purpose </h1>
                <h3>winning or losing depends on you.</h3>
                <p>Your final clutch, the pixel perfect ultimate, the timed <br/>
                    flashing will grant you more than victory
                </p>
            </div>

        </section>
    )
}

export default Purpose