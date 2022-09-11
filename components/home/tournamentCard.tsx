import styles from './tournamentCard.module.scss'
import buttonStyles from '../ui/button/button.module.scss'

import useTranslation from "next-translate/useTranslation";

const TournamentCard = ({name}: { name: string }) => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.tournamentCard}>

            <div className={styles.cardImage}>
                <img src="/images/fortnite-card.jpg"/>
            </div>

            <section>

                <div className={styles.cardHeader}>
                    <img src="/images/fortnite.png"/>
                    <p>avatar owners <span>+<b>10</b>%</span></p>
                </div>

                <div className={styles.cardDateTime}>
                    <div><img src="/images/icons/calendar.svg"/> Monday, Jan 31</div>
                    <div><img src="/images/icons/clock.svg"/> 9:00 AM <span>in 5 days</span></div>
                </div>

                <div className={styles.cardContent}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias asperiores aspernatur,
                        commodi
                        consectetur doloribus dolorum eligendi error harum modi, nostrum placeat provident quis quos
                        ratione
                        suscipit temporibus voluptatem voluptatum?</p>
                </div>

                <div className={styles.cardFooter}>
                    <div className={styles.cardFooterPoints}><img src="/images/icons/trophy.svg"/> 500 Points</div>
                    <div className={styles.cardFooterActions}>
                        <p><span>95</span> / 100</p>
                        <button className={buttonStyles.buttonOutline}>{t('participate')}</button>
                    </div>
                </div>

            </section>

        </section>
    )
}

export default TournamentCard