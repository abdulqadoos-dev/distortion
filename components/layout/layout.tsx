import Header from '../header/header'
import styles from './layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <>
            <Header />
        </>
    )
}

export default Layout