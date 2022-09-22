import styles from './copyrights.module.scss'
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'

const CopyRights = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <section className={styles.copyRights}>
                <p>DISTORTION {new Date().getFullYear()} &copy; </p>
                <p>support@distortion.com</p>
            </section>
        </>
    )
}

export default CopyRights