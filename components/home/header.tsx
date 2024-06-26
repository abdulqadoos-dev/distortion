import styles from './header.module.scss'
import buttonStyles from '../ui/button/button.module.scss'
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Header = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <section className={styles.container}>
                <div className={styles.filter}/>
                <div className={styles.content}>
                    <h1>Your favorite Games on Steroïds</h1>
                    <p>Valorize your playtime with the tools to improve, perform and standout
                       while being rewarded at every step.</p>
                    <button className={buttonStyles.button}>
                        <Link href="https://discord.gg/distortion" target={'_blank'}><a>{t('join now')}</a></Link>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Header