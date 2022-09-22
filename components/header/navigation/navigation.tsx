import useTranslation from 'next-translate/useTranslation'
import {useRouter} from 'next/router'
import styles from './navigation.module.scss'

const Navigation = (): JSX.Element => {
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
        <div className={styles.navigation}>
            <div className={styles.closeNavigation}>
                <img src="/images/icons/chevron-up.svg" alt=""/>
            </div>
            <ul>
                <li className={getClassName(1)}>
                    {t('header-nav-home')}
                </li>
                <li className={getClassName(2)}>
                    {t('header-nav-tournaments')}
                </li>
                <li className={getClassName(3)}>
                    {t('header-nav-games')}
                </li>
            </ul>
        </div>
    )
}

export default Navigation