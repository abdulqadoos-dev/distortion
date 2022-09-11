import styles from './listItems.module.scss'

const ListItems = () => {
    return (
        <section className={styles.listItems}>
            <div className={styles.listItemHeader}>
                <span>Rank</span>
                <span>Player</span>
                <span>Total XP</span>
                <span>Rank</span>
                <span>Wins</span>
            </div>
            <div className={styles.listItemContent}>
                <img src="/images/cs-go.svg" alt=""/>
            </div>
        </section>
    )
}

export default ListItems