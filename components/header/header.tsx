import Logo from './logo/logo'
import Navigation from './navigation/navigation'
import Connection from './connection/connection'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <Connection />
      </div>
    </header>
  )
}

export default Header