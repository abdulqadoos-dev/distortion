import type {NextPage} from 'next'
import Head from 'next/head'
import Layout from '../../components/layout/layout'
import Slide from '../../components/home/slide'
import UpcomingTournaments from '../../components/home/upcoming'
import FAQ from '../../components/home/faq'
import styles from './landingPage.module.scss'
import Copyrights from "../../components/footer/copyrights";
import Journey from "../../components/landingPage/journey";
import Novel from "../../components/landingPage/novel";

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
                        <Journey/>
                        <Novel/>
                        <UpcomingTournaments/>
                        <FAQ/>
                    </main>
                </Layout>
            </div>
            <Copyrights/>
        </>
    )
}

export default Home
