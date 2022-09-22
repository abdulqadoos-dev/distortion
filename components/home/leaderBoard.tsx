import styles from './leaderboard.module.scss'
import buttonStyle from '../ui/button/button.module.scss'
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'
import Games from "./leaderboard/games";
import ListItems from "./leaderboard/listItems";

const LeaderBoard = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <h1>{t('leaderboard')}</h1>

            <section className={styles.leaderboardTabsContainer}>

                <div className={styles.tabs}>
                    <span className={styles.active}>Engagement</span>
                    <span>Performance</span>
                </div>

                <div className={styles.tabsContent}>
                    <Games/>
                    <ListItems/>
                </div>

            </section>

            <div className={styles.viewMoreLink}>
                <Link href="/">
                    <a className={buttonStyle.viewMore}>{t('view more')} <img src="/images/icons/arrow-right.svg"/></a>
                </Link>
            </div>
        </section>

    )
}

export default LeaderBoard