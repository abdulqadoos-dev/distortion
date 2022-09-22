import styles from './logo.module.scss'

const Logo = (): JSX.Element => {
    return (
        <div className={styles.logo}>
            <img src="/images/distortion.svg"/>
        </div>
    )
}

export default Logo