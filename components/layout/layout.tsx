import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './layout.module.scss'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <>
            <Header />
            { children }

             <Footer />
        </>
    )
}

export default Layout