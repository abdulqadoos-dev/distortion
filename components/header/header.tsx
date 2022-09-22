import Logo from './logo/logo'
import Navigation from './navigation/navigation'
import Connection from './connection/connection'
import styles from './header.module.scss'
import buttonStyles from '../ui/button/button.module.scss'

const Header = () => {
    return (
        <header className={styles.container}>
            <Logo/>
            <Navigation/>
            <section className={styles.actions}>
                <Connection/>
                <div className={buttonStyles.menuIcon}>
                    <img src="/images/icons/menu.svg"/>
                </div>
            </section>
        </header>
    )
}

export default Header