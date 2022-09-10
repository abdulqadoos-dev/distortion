import Logo from './logo/logo'
import Navigation from './navigation/navigation'
import Connection from './connection/connection'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.container}>
            <Logo/>
            <Navigation/>
            <Connection/>
        </header>
    )
}

export default Header