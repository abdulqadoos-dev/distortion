import TournamentCard from './tournamentCard'
import styles from './upcoming.module.scss'
import useTranslation from "next-translate/useTranslation";

const UpcomingTournaments = () => {
  const {t, lang} = useTranslation('common')

  return (
      <section className={styles.upcoming}>
        <h2>{t('upcoming tournaments')}</h2>
        <div className={styles.tournamentCardContainer}>
          <TournamentCard name='Valorant' />
          <TournamentCard name='Valorant' />
          <TournamentCard name='Valorant' />
          <TournamentCard name='Valorant' />
        </div>
      </section>

  )
}

export default UpcomingTournaments