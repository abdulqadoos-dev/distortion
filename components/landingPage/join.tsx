import styles from "./join.module.scss"
import buttonStyles from "../ui/button/button.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Join = () => {
    const {t, lang} = useTranslation('common')
    return (
        <section className={styles.container}>
            <div>
                <h1>Join for free now ! </h1>
                <p>Easy, Secure, and fully yours!</p>
                <button className={buttonStyles.button}>
                    <Link href="https://discord.gg/distortion" target={'_blank'}><a>{t('join now')}</a></Link>
                </button>
            </div>
        </section>
    )
}

export default Join