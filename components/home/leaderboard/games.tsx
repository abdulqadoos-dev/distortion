import styles from './games.module.scss'

const Games = () => {
    return (
        <section className={styles.games}>
            <div className={styles.gameItem}>
                <img src="/images/cs-go.svg" alt=""/>
            </div>
            <div className={styles.gameItem}>
                <img src="/images/cs-go.svg" alt=""/>
            </div>
        </section>
    )
}

export default Games