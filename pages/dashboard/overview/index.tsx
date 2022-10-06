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
import Games from "../../../components/home/leaderboard/games";
import ListItems from "../../../components/home/leaderboard/listItems";
import Link from "next/link";
import buttonStyle from "../../../components/ui/button/button.module.scss";
import RedeemReward from "./redeem-reward";
import Profile from "../../../components/dashboard/profile";
import HeadSection from "../../../components/ui/Head";

const Overview: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            {/*<RedeemReward/>*/}

            <div className={styles.container}>
                <HeadSection title={t('Dashboard Overview')}/>

                <Layout>
                    <main>
                        <section className={styles.banner}>
                            <Image src="/images/overview-banner.jpg" width="1920" height="400px" layout="intrinsic"/>
                        </section>



                        <section className={styles.content}>

                            <Profile/>

                            <section className={styles.main}>

                                <div className={styles.heading}>
                                    <h1>Your next steps</h1>
                                </div>

                                <div className={styles.steps}>

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
                                            <div></div>
                                            <button className={buttonStyles.buttonOutline}>{t('connect')}</button>
                                        </div>


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
                                            <div><span>1 </span> / <span>92   </span></div>
                                            <button className={buttonStyles.buttonOutline}>{t('connect')}</button>
                                        </div>

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
                                            <div><span>1 </span> / <span>92   </span></div>
                                            <button className={buttonStyles.buttonOutline}>{t('share')}</button>

                                        </div>


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
                                            <div><span>1 </span> / <span>92   </span></div>
                                            <button className={buttonStyles.buttonOutline}>{t('participate')}</button>
                                        </div>



                                    </div>

                                </div>

                                <div className={styles.heading}>
                                    <h1>Your Daily Rewards</h1>
                                </div>

                                <div className={styles.rewards}>


                                    <div className={styles.reward}>
                                        <div className={styles.default}>
                                        <span className={styles.informationIcon}>
                                            <ReactSVG src="/images/icons/information.svg"/>
                                        </span>
                                            <div className={styles.image}>
                                                <Image src="/images/reward-box.png" width="180" height="170"
                                                       layout="intrinsic"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>REWARD</p>
                                                <h1>8H</h1>
                                            </div>

                                        </div>
                                        <div className={styles.load}>
                                            <p>load</p>
                                            <ReactSVG src={"/images/icons/reward-underline.svg"}/>
                                        </div>
                                    </div>

                                    <div className={styles.reward}>
                                        <div className={styles.default}>
                                        <span className={styles.informationIcon}>
                                            <ReactSVG src="/images/icons/information.svg"/>
                                        </span>
                                            <div className={styles.image}>
                                                <Image src="/images/reward-box.png" width="180" height="170"
                                                       layout="intrinsic"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>REWARD</p>
                                                <h1>8H</h1>
                                            </div>

                                        </div>
                                        <div className={styles.load}>
                                            <p>load</p>
                                            <ReactSVG src={"/images/icons/reward-underline.svg"}/>
                                        </div>
                                    </div>


                                    <div className={styles.reward}>
                                        <div className={styles.ready}>
                                        <span className={styles.informationIcon}>
                                            <ReactSVG src="/images/icons/information.svg"/>
                                        </span>
                                            <div className={styles.image}>
                                                <Image src="/images/reward-box.png" width="180" height="170"
                                                       layout="intrinsic"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>REWARD</p>
                                                <h1>ready</h1>
                                            </div>
                                        </div>
                                        <div className={styles.load}>
                                            <p>load</p>
                                            <ReactSVG src={"/images/icons/reward-underline.svg"}/>
                                        </div>
                                    </div>

                                    <div className={styles.reward}>
                                        <div className={styles.loading}>
                                        <span className={styles.informationIcon}>
                                            <ReactSVG src="/images/icons/information.svg"/>
                                        </span>
                                            <div className={styles.image}>
                                                <Image src="/images/reward-box.png" width="180" height="170"
                                                       layout="intrinsic"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>REWARD</p>
                                                <h1>loading</h1>
                                            </div>

                                        </div>
                                        <div className={styles.load}>
                                            <p>load</p>
                                            <ReactSVG src={"/images/icons/reward-underline.svg"}/>
                                        </div>
                                    </div>

                                    <div className={styles.reward}>
                                        <div className={styles.loading}>
                                        <span className={styles.informationIcon}>
                                            <ReactSVG src="/images/icons/information.svg"/>
                                        </span>
                                            <div className={styles.image}>
                                                <Image src="/images/reward-box.png" width="180" height="170"
                                                       layout="intrinsic"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>REWARD</p>
                                                <h1>loading</h1>
                                            </div>

                                        </div>
                                        <div className={styles.load}>
                                            <p>load</p>
                                            <ReactSVG src={"/images/icons/reward-underline.svg"}/>
                                        </div>
                                    </div>

                                    <div className={styles.reward}>
                                        <div className={styles.disabled}>
                                        <span className={styles.informationIcon}>
                                            <ReactSVG src="/images/icons/information.svg"/>
                                        </span>
                                            <div className={styles.image}>
                                                <Image src="/images/reward-box.png" width="180" height="170"
                                                       layout="intrinsic"/>
                                            </div>
                                            <div className={styles.text}>
                                                <p>REWARD</p>
                                                <h1>8H</h1>
                                            </div>

                                        </div>
                                        <div className={styles.load}>
                                            <p>load</p>
                                            <ReactSVG src={"/images/icons/reward-underline.svg"}/>
                                        </div>
                                    </div>

                                </div>

                                <section className={styles.tabsContainer}>

                                    <div className={styles.tabs}>
                                        <span className={styles.active}>Overview</span>
                                        <span>Tournaments</span>
                                    </div>

                                    <div className={styles.tabsContent}>
                                        <div className={styles.gameStats}>
                                            <div className={styles.heading}>
                                                <div>
                                                    <h2>Game Stats </h2>
                                                    <h2>(coming)</h2>
                                                </div>
                                                <Link href="/">
                                                    <a className={buttonStyle.viewMore}>{t('view more')} <img
                                                        src="/images/icons/arrow-right.svg"/></a>
                                                </Link>
                                            </div>

                                            <div className={styles.cards}>

                                                <div className={styles.statsCard}>
                                                    <div className={styles.image}>
                                                        <Image src="/images/valorant-poster.jpg" width="200px"
                                                               height="300px" layout="intrinsic"/>
                                                    </div>

                                                    <div className={styles.stats}>

                                                        <h1>valorant</h1>
                                                        <p>matches <span>120</span></p>
                                                        <hr/>
                                                        <p>wins <span>10</span></p>
                                                    </div>
                                                </div>
                                                <div className={styles.statsCard}>
                                                    <div className={styles.image}>
                                                        <Image src="/images/valorant-poster.jpg" width="200px"
                                                               height="300px" layout="intrinsic"/>
                                                    </div>

                                                    <div className={styles.stats}>
                                                        <h1>valorant</h1>
                                                        <p>matches <span>120</span></p>
                                                        <hr/>
                                                        <p>wins <span>10</span></p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div className={styles.badgeWell}>
                                            <div className={styles.heading}>
                                                <div>
                                                    <h2>badge wall</h2>
                                                    <h2>(coming)</h2>
                                                </div>
                                                <Link href="/">
                                                    <a className={buttonStyle.viewMore}>{t('view more')} <img
                                                        src="/images/icons/arrow-right.svg"/></a>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className={styles.contribution}>
                                            <div className={styles.heading}>
                                                <div>
                                                    <h2>your contribution </h2>
                                                    <h2>(coming)</h2>
                                                </div>
                                                <Link href="/">
                                                    <a className={buttonStyle.viewMore}>{t('view more')} <img
                                                        src="/images/icons/arrow-right.svg"/></a>
                                                </Link>
                                            </div>
                                        </div>


                                    </div>

                                </section>
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