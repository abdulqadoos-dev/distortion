import useTranslation from 'next-translate/useTranslation'
import {useRouter} from 'next/router'
import styles from './navigation.module.scss'
import Link from 'next/link'
import {ReactSVG} from "react-svg";

const Navigation = ({navigation,setState}: any): JSX.Element => {
    const router = useRouter()
    const {t, lang} = useTranslation('common')
    const activeClassName = styles.active

    const getClassName = (idx: number): string => {
        switch (idx) {
            case 1:
                return (router.pathname === '/') ? activeClassName : ''
            case 2:
                return (router.pathname === '/tournaments') ? activeClassName : ''
            case 3:
                return (router.pathname === '/games') ? activeClassName : ''
            default:
                return ''
        }
    }

    return (
        <div className={navigation === "desktop" ? styles.navigation : styles.mobileNavigation}>
            <div className={styles.closeNavigation}
                 onClick={() => setState('desktop')}
            >
                <ReactSVG src="/images/icons/close.svg" alt=""/>
            </div>
            <ul>
                <li className={getClassName(1)}>
                    <Link href="/"><a>{t('header-nav-home')}</a></Link>
                </li>
                <li className={getClassName(2)}>
                    {t('header-nav-tournaments')} <br/>
                    <sup> (coming soon)</sup>
                </li>

                <li className={getClassName(3)}>
                    <Link href="#roadmap"><a>{t('road map')}</a></Link>
                </li>

                <li className={getClassName(4)}>
                    <Link href="https://distortionnft.io/fr/episode-1/"><a>{t('Story')}</a></Link>
                </li>

                <li className={getClassName(4)}>
                    <Link href="https://distortionnft.io/wp-content/uploads/2022/10/Light-Paper-V6b.pdf"><a>{t('Lightpaper')}</a></Link>
                </li>

            </ul>
        </div>
    )
}

export default Navigation