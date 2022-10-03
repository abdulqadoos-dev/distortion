import styles from './header.module.scss'
import buttonStyles from '../ui/button/button.module.scss'
import useTranslation from "next-translate/useTranslation";

const Header = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <section className={styles.container}>
                <div className={styles.filter}/>
                <div className={styles.content}>
                    <h1>Play & Earn with your favorite games</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className={buttonStyles.button}>{t('join-now')}</button>
                </div>
            </section>
        </>
    )
}

export default Header