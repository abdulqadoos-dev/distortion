import styles from './listItems.module.scss'
import useTranslation from "next-translate/useTranslation";

const ListItems = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.listContainer}>
            <div className={styles.listItemHeader}>
                <span>{t('Rank')}</span>
                <span>{t('Player')}</span>
                <span>{t('Total XP')}</span>
                <span>{t('Rank')}</span>
                <span>{t('Wins')}</span>
            </div>
            <div className={styles.listItemContent}>
                <div className={styles.winnerBadge}>
                    <img src="/images/icons/king.svg" />
                    <p>1</p>
                </div>
                <div className={styles.name}>
                    <span><img src="/images/fortnite-card.jpg" /></span>
                    <img src="/images/icons/play-station.svg" alt=""/>
                    <p>chotaplayer</p>
                </div>
                <p>17,206</p>
                <p>2687</p>
                <div className={styles.winTrophy}>
                    <img src="/images/icons/trophy-yellow.svg" alt=""/>
                    <img src="/images/icons/trophy-gray.svg" alt=""/>
                    <img src="/images/icons/trophy-orange.svg" alt=""/>
                </div>
            </div>
            <div className={styles.listItemContent}>
                <div className={styles.winnerBadge}>
                    <img src="/images/icons/king.svg" />
                    <p>2</p>
                </div>
                <div className={styles.name}>
                    <span></span>
                    <img src="/images/icons/play-station.svg" alt=""/>
                    <p>zemaa092</p>
                </div>
                <p>12,206</p>
                <p>267</p>
                <div className={styles.winTrophy}>
                    <img src="/images/icons/trophy-yellow.svg" alt=""/>
                    <img src="/images/icons/trophy-gray.svg" alt=""/>
                    <img src="/images/icons/trophy-orange.svg" alt=""/>
                </div>
            </div>

            <div className={styles.listItemContent}>
                 <p>4</p>
                <div className={styles.name}>
                    <span></span>
                    <img src="/images/icons/play-station.svg" alt=""/>
                    <p>zemaa092</p>
                </div>
                <p>12,206</p>
                <p>267</p>
                <div className={styles.winTrophy}>
                    <img src="/images/icons/trophy-yellow.svg" alt=""/>
                    <img src="/images/icons/trophy-gray.svg" alt=""/>
                    <img src="/images/icons/trophy-orange.svg" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default ListItems