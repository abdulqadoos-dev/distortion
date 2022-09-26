import {NextPage} from "next";
import styles from "./dashboard-overview.module.scss";
import buttonStyles from "../../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";
import Footer from "../../../components/footer/footer";
import CopyRights from "../../../components/footer/copyrights";
import Image from 'next/image'

const Overview: NextPage = () => {
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
                        <section className={styles.banner}>
                            <Image src="/images/overview-banner.jpg" width="1920" height="400px" layout="intrinsic"/>
                        </section>
                        <section className={styles.content}>

                            <section className={styles.profile}>

                                <div className={styles.header}>
                                    <div className={styles.image}>
                                        <Image src="/images/user.jpg" width="80" height="80" layout="intrinsic"/>
                                    </div>
                                    <div className={styles.bio}>
                                        <h3>Anthony levy</h3>
                                        <p>bronze</p>
                                        <span>240 Tournaments</span>
                                    </div>
                                    <div className={styles.rank}>
                                        <span>21</span>
                                    </div>
                                </div>

                                <div className={styles.stats}>
                                    <div className={styles.list}>
                                        <div className={styles.points}>
                                            <p>Distortion Points</p>
                                            <span>2345</span>
                                        </div>
                                        <div className={styles.performance}>
                                            <p>Tournament Performance</p>
                                            <div>
                                                <span>7</span>
                                                <ReactSVG src={'/images/icons/trophy-yellow.svg'}/>
                                                <span>7 </span>
                                                <ReactSVG src={'/images/icons/trophy-gray.svg'}/>
                                                <span>7</span>
                                                <ReactSVG src={'/images/icons/trophy-orange.svg'}/>
                                            </div>
                                        </div>

                                        <div className={styles.ratio}>
                                            <p>Ratio</p>
                                            <div>
                                                <span>118 W  </span> / <span>92 L  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className={buttonStyles.button}>{t('Referral Link')}</button>

                                <div className={styles.leaderboard}>
                                    <div className={styles.row}>
                                        <Image src="/images/fortnite.png" width="80px" height="30"
                                               layout="intrinsic"/>
                                        <div className={styles.points}>
                                            <p>Distortion Points</p>
                                            <span>2345</span>
                                        </div>
                                        <div className={styles.performance}>
                                            <p>Tournament Performance</p>
                                            <div>
                                                <span>7 </span>
                                                <ReactSVG src={'/images/icons/trophy-yellow.svg'}/>
                                                <span>7 </span>
                                                <ReactSVG src={'/images/icons/trophy-gray.svg'}/>
                                                <span>7 </span>
                                                <ReactSVG src={'/images/icons/trophy-orange.svg'}/>
                                            </div>
                                        </div>
                                        <div className={styles.ratio}>
                                            <p>Ratio</p>
                                            <div>
                                                <span>118 W  </span> / <span>92 L  </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.row}>
                                        <Image src="/images/fortnite.png" width="80px" height="30"
                                               layout="intrinsic"/>
                                        <div className={styles.points}>
                                            <p>Distortion Points</p>
                                            <span>2345</span>
                                        </div>
                                        <div className={styles.performance}>
                                            <p>Tournament Performance</p>
                                            <div>
                                                <span>7 </span>
                                                <ReactSVG src={'/images/icons/trophy-yellow.svg'}/>
                                                <span>7 </span>
                                                <ReactSVG src={'/images/icons/trophy-gray.svg'}/>
                                                <span>7 </span>
                                                <ReactSVG src={'/images/icons/trophy-orange.svg'}/>
                                            </div>
                                        </div>
                                        <div className={styles.ratio}>
                                            <p>Ratio</p>
                                            <div>
                                                <span>118 W  </span> / <span>92 L  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* main content of the page*/}
                            <section className={styles.main}>
                                <div className={styles.steps}>

                                    <div className={styles.heading}>
                                        <h1>Your next steps</h1>
                                    </div>

                                    <div className={styles.step}>
                                        <div className={styles.icon}>
                                            <ReactSVG src={"/images/icons/wallet-full.svg"}/>
                                        </div>
                                        <div className={styles.heading}>
                                            <h3>Create your Distortion account</h3>
                                        </div>

                                        <div className={styles.experience}>
                                            <span>
                                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                                100xp
                                            </span>
                                            <span>
                                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                                Reward
                                            </span>
                                        </div>

                                        <div className={styles.ratio}>
                                        </div>

                                        <button className={buttonStyles.buttonOutline}>{t('connect')}</button>

                                    </div>

                                    <div className={styles.step}>
                                        <div className={styles.icon}>
                                            <ReactSVG src={"/images/icons/discord.svg"}/>
                                        </div>
                                        <div className={styles.heading}>
                                            <h3>Connect your Discord account</h3>
                                            <p> &bull; Participate to tournaments</p>
                                            <p> &bull; Obtain your rewards</p>
                                            <p> &bull; Stay tuned on our last updates</p>
                                        </div>

                                        <div className={styles.experience}>
                                            <span>
                                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                                100xp
                                            </span>
                                            <span>
                                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                                Reward
                                            </span>
                                        </div>

                                        <div className={styles.ratio}>
                                            <span>1 </span> / <span>92   </span>
                                        </div>

                                        <button className={buttonStyles.buttonOutline}>{t('connect')}</button>

                                    </div>

                                    <div className={styles.step}>
                                        <div className={styles.icon}>
                                            <ReactSVG src={"/images/icons/team.svg"}/>
                                        </div>

                                        <div className={styles.heading}>
                                            <h3>Create you team</h3>
                                            <p> &bull; Invite your friends</p>
                                            <p> &bull; Prepare your team</p>
                                            <p> &bull; Obtain rewards</p>
                                        </div>

                                        <div className={styles.experience}>
                                            <span>
                                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                                100xp
                                            </span>
                                            <span>
                                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                                Reward
                                            </span>
                                        </div>

                                        <div className={styles.ratio}>
                                            <span>1 </span> / <span>92   </span>
                                        </div>

                                        <button className={buttonStyles.buttonOutline}>{t('share')}</button>

                                    </div>

                                    <div className={styles.step}>
                                        <div className={styles.icon}>
                                            <ReactSVG src={"/images/icons/tournaments.svg"}/>
                                        </div>

                                        <div className={styles.heading}>
                                            <h3>Participate 1rst tournament </h3>
                                            <p> &bull; Invite your friends</p>
                                            <p> &bull; Prepare your team</p>
                                            <p> &bull; Obtain rewards</p>
                                        </div>

                                        <div className={styles.experience}>
                                            <span>
                                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                                100xp
                                            </span>
                                            <span>
                                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                                Reward
                                            </span>
                                        </div>

                                        <div className={styles.ratio}>
                                            <span>1 </span> / <span>92   </span>
                                        </div>

                                        <button className={buttonStyles.buttonOutline}>{t('participate')}</button>

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

export default Overview