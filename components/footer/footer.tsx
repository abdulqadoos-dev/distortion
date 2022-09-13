import styles from './footer.module.scss'
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'

const Footer = () => {
    const {t, lang} = useTranslation('common')

    return (
    <>
      <footer className={styles.footer}>

          <div className={styles.logo}>
              <img src="/images/distortion.svg" />
          </div>

          <ul className={styles.navigation}>
              <li>
                  <Link href="/">
                      <a>{t('about us')}</a>
                  </Link>
              </li>
              <li>
                    <Link href="/">
                      <a>{t('contact us')}</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a>{t('news')}</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a>{t('terms & conditions')}</a>
                  </Link>
              </li>
              <li>
                  <Link href="/">
                      <a>{t('privacy policy')}</a>
                  </Link>
              </li>
          </ul>
      </footer>
    </>
  )
}

export default Footer