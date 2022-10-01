import type {NextPage} from 'next'
import styles from './connected.module.scss'

import Head from 'next/head'
import Layout from '../../components/layout/layout'
import UpcomingTournaments from '../../components/home/upcoming'
import Copyrights from "../../components/footer/copyrights";
import LeaderBoard from "../../components/home/leaderBoard";
import Footer from "../../components/footer/footer";
import Banner from "../../components/connected/banner";
import Steps from "../../components/connected/steps";

const Connected: NextPage = () => {
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
                        <Banner/>
                        <Steps/>
                        <UpcomingTournaments/>
                        <LeaderBoard/>
                    </main>
                    <Footer/>
                </Layout>
            </div>
            <Copyrights/>
        </>
    )
}

export default Connected
