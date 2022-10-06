import Logo from './logo/logo'
import Navigation from './navigation/navigation'
import Connection from './connection/connection'
import styles from './header.module.scss'
import buttonStyles from '../ui/button/button.module.scss'
import {useState} from "react";

const Header = () => {
    const [navigation,setNavigation] = useState('desktop')
    return (
        <header className={styles.container}>
            <Logo/>
            <Navigation navigation={navigation} setState={setNavigation}/>
            <section className={styles.actions}>
                <Connection/>
                <div className={buttonStyles.menuIcon}
                     onClick={() => setNavigation('mobile')}
                >
                    <img src="/images/icons/menu.svg"/>
                </div>
            </section>
        </header>
    )
}

export default Header