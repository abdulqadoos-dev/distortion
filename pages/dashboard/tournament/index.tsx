import {NextPage} from "next";
import styles from "./tournament.module.scss";
import buttonStyles from "../../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";
import Footer from "../../../components/footer/footer";
import CopyRights from "../../../components/footer/copyrights";
import Image from 'next/image'
import Link from "next/link";

const Tournament: NextPage = () => {
    const {t, lang} = useTranslation('common')

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
                        <section className={styles.banner}/>

                        <section className={styles.content}>

                            <section className={styles.tournament}>

                                <div className={styles.image}>
                                    <Image src="/images/tournament-logo.jpg" width="200" height="200"
                                           layout="intrinsic"/>
                                </div>

                                <div className={styles.information}>
                                    <h4>VALORANT TOURNAMENT</h4>
                                    <p>{"Sept 09 10:00pm > Sept 15 10PM"}</p>
                                    <span> Entry Price  <b>50$</b></span>
                                </div>

                            </section>


                            <section className={styles.tabsContainer}>

                                <div className={styles.tabs}>
                                    <span className={styles.active}>Overview</span>
                                    <span>Tournament Bracket</span>
                                    <span>Streaming</span>
                                </div>

                                <div className={styles.tabsContent}>

                                    <div className={styles.overview}>

                                        <div className={styles.details}>
                                            <div className={styles.icons}>
                                                <div className={styles.icon}>
                                                    <ReactSVG src={"/images/icons/tournaments.svg"}/>
                                                    <h3>Team Fight</h3>
                                                    <p>Game type</p>
                                                </div>

                                                <div className={styles.icon}>
                                                    <ReactSVG src={"/images/icons/trophy-start.svg"}/>
                                                    <h3>1000$</h3>
                                                    <p>Cash price</p>
                                                </div>

                                                <div className={styles.icon}>
                                                    <ReactSVG src={"/images/icons/users.svg"}/>
                                                    <h3>50</h3>
                                                    <p>Players</p>
                                                </div>

                                                <div className={styles.icon}>
                                                    <ReactSVG src={"/images/icons/world.svg"}/>
                                                    <h3>USA</h3>
                                                    <p>Region</p>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                                                commodi cupiditate deserunt enim excepturi hic iste minus molestiae non
                                                nulla optio reiciendis saepe sapiente sit temporibus, totam vel vitae.
                                                Necessitatibus.</p>
                                        </div>

                                        <div className={styles.displayGrid}>

                                            <div className={styles.join}>

                                                <div className={styles.section}>
                                                    <ReactSVG src={'/images/icons/border-vertical.svg'}/>
                                                    <div className={styles.content}>
                                                        <h3>Registration</h3>
                                                        <p>Registration are open</p>
                                                        <span>{"35 players registered"}</span>
                                                    </div>
                                                </div>

                                                <div className={styles.section}>
                                                    <ReactSVG src={'/images/icons/border-vertical.svg'}/>
                                                    <div className={styles.content}>
                                                        <h3>Start</h3>
                                                        <p>Registration are open</p>
                                                        <span>{"Sept 09 10:00pm > Sept 15 10PM"}</span>
                                                    </div>
                                                </div>

                                                <div className={styles.section}>
                                                    <ReactSVG src={'/images/icons/border-vertical.svg'}/>
                                                    <div className={styles.content}>
                                                        <h3>Finish</h3>
                                                        <p>The tournament ended</p>
                                                    </div>
                                                </div>

                                                <div className={styles.action}>
                                                    <span> Entry Price  <b>50$</b></span>
                                                    <button className={buttonStyles.button}>{t('join')}</button>
                                                    <Link href={''}><a>Unregister</a></Link>
                                                </div>

                                            </div>

                                            <table className={styles.table}>
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>PLAYER</th>
                                                    <th>LADDER SCORE</th>
                                                    <th>WINS</th>
                                                    <th>LOSSES</th>
                                                    <th>K/D</th>
                                                    <th>ASSISTS</th>
                                                    <th>HS%</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><b>1</b></td>
                                                    <td className={styles.playerName}><span
                                                        className={styles.image}></span>Maria Anders
                                                    </td>
                                                    <td>25.00</td>
                                                    <td>5</td>
                                                    <td>0</td>
                                                    <td>0.04</td>
                                                    <td>31</td>
                                                    <td>70</td>
                                                </tr>
                                                <tr>
                                                    <td><b>1</b></td>
                                                    <td className={styles.playerName}><span
                                                        className={styles.image}></span>Maria Anders
                                                    </td>
                                                    <td>25.00</td>
                                                    <td>5</td>
                                                    <td>0</td>
                                                    <td>0.04</td>
                                                    <td>31</td>
                                                    <td>70</td>
                                                </tr>
                                                <tr>
                                                    <td><b>1</b></td>
                                                    <td className={styles.playerName}><span
                                                        className={styles.image}></span>Maria Anders
                                                    </td>
                                                    <td>25.00</td>
                                                    <td>5</td>
                                                    <td>0</td>
                                                    <td>0.04</td>
                                                    <td>31</td>
                                                    <td>70</td>
                                                </tr>
                                                <tr>
                                                    <td><b>1</b></td>
                                                    <td className={styles.playerName}><span
                                                        className={styles.image}></span>Maria Anders
                                                    </td>
                                                    <td>25.00</td>
                                                    <td>5</td>
                                                    <td>0</td>
                                                    <td>0.04</td>
                                                    <td>31</td>
                                                    <td>70</td>
                                                </tr>
                                                <tr>
                                                    <td><b>1</b></td>
                                                    <td className={styles.playerName}><span
                                                        className={styles.image}></span>Maria Anders
                                                    </td>
                                                    <td>25.00</td>
                                                    <td>5</td>
                                                    <td>0</td>
                                                    <td>0.04</td>
                                                    <td>31</td>
                                                    <td>70</td>
                                                </tr>
                                                <tr>
                                                    <td><b>1</b></td>
                                                    <td className={styles.playerName}><span
                                                        className={styles.image}></span>Maria Anders
                                                    </td>
                                                    <td>25.00</td>
                                                    <td>5</td>
                                                    <td>0</td>
                                                    <td>0.04</td>
                                                    <td>31</td>
                                                    <td>70</td>
                                                </tr>
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>

                                </div>

                            </section>


                        </section>

                    </main>
                    <Footer/>
                </Layout>
            </div>
            <CopyRights/>
        </>
    )
}

export default Tournament