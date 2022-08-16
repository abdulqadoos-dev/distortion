import TournamentCard from './tournamentCard'
import styles from './upcoming.module.scss'

const UpcomingTournaments = () => {
  return (
    <>
      <div className={styles.upcoming}>
        <h2>UPCOMING TOURNAMENTS</h2>
        <div>
          <TournamentCard name='Valorant' />
          <TournamentCard name='Valorant' />
          <TournamentCard name='Valorant' />
          <TournamentCard name='Valorant' />
        </div>
      </div>
    </>
  )
}

export default UpcomingTournaments