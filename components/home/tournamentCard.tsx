import styles from './tournamentCard.module.scss'

const TournamentCard = ({ name }: { name: string }) => {
  return (
    <>
      <div className={styles.tournamentCard}>
        <div></div>
        <div>
          <h3>VALORANT</h3>
          <div className={styles.schedule}>
            <p>
              <span><img src="/images/calendar.png" /></span>
              <span>Monday, Jan 31</span>
            </p>
            <p>
              <span><img src="/images/clock.png" /></span>
              <span>9:00 AM</span>
            </p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </div>
          <div className={styles.trophy}>
            <span><img src="/images/trophy.png" /></span>
            <span>500 points</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TournamentCard