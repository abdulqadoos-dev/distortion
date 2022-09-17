import type {NextPage} from 'next'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import Slide from '../components/home/slide'
import UpcomingTournaments from '../components/home/upcoming'
import FAQ from '../components/home/faq'
import styles from '../styles/Home.module.css'
import LeaderBoard from "../components/home/leaderBoard";
import Copyrights from "../components/footer/copyrights";

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Distortion</title>
                    <meta name="description" content="Distortion Dashboard"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <Layout>
                    <main>
                        <Slide/>
                        <UpcomingTournaments/>
                        <LeaderBoard/>
                        <FAQ/>
                    </main>
                </Layout>
            </div>
            <Copyrights/>
        </>
    )
}

export default Home
