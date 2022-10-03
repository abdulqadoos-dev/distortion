import styles from "./_novel.module.scss"
import buttonStyles from "../ui/button/button.module.scss"
import useTranslation from "next-translate/useTranslation";

const _novel = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <div>
                <h1>immerse yourself
                    <br/> in the Gamifield
                    <br/> world Distortions
                </h1>
                <p>Your actions right the futureYour future</p>
                <button className={buttonStyles.button}>{t('read the novel')}</button>
            </div>
        </section>
    )
}

export default _novel