import type {NextPage} from 'next'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Header from '../components/home/header'
import UpcomingTournaments from '../components/home/upcoming'
import FAQ from '../components/home/faq'
import styles from '../styles/Home.module.css'
import LeaderBoard from "../components/home/leaderBoard";
import Copyrights from "../components/footer/copyrights";
import Footer from "../components/footer/footer";
import HeadSection from "../components/ui/Head";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>

                <HeadSection title={t('Home')}/>

                <Layout>
                    <main>
                        <Header/>
                        <UpcomingTournaments/>
                        <LeaderBoard/>
                        <FAQ/>
                    </main>
                    <Footer/>
                </Layout>
            </div>
            <Copyrights/>
        </>
    )
}

export default Home
