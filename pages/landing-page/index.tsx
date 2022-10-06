import type {NextPage} from 'next'
import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Header from '../../components/home/header'
import UpcomingTournaments from '../../components/home/upcoming'
import FAQ from '../../components/home/faq'
import styles from './landingPage.module.scss'
import Copyrights from "../../components/footer/copyrights";
import Journey from "../../components/landingPage/journey";
import Novel from "../../components/landingPage/novel";
import Purpose from "../../components/landingPage/purpose";
import Join from "../../components/landingPage/join";
import Collaboration from "../../components/landingPage/collaboration";
import Roadmap from "../../components/landingPage/roadmap";
import LeaderBoard from "../../components/home/leaderBoard";
import Experience from "../../components/landingPage/experiences";
import Footer from "../../components/footer/footer";
import HeadSection from "../../components/ui/Head";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <HeadSection title={t('Join')}/>

                <Layout>
                    <main>
                        <Header/>
                        <Journey/>
                        <Novel/>
                        <Experience/>
                        <Purpose/>
                        <UpcomingTournaments/>
                        <LeaderBoard/>
                        <Roadmap/>
                        <Join/>
                        <FAQ/>
                        <Collaboration/>
                    </main>
                    <Footer />

                </Layout>
            </div>
            <Copyrights/>
        </>
    )
}

export default Home
