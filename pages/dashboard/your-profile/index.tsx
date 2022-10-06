import {NextPage} from "next";
import styles from "./your-profile.module.scss";
import Head from "next/head";
import Layout from "../../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";
import Footer from "../../../components/footer/footer";
import CopyRights from "../../../components/footer/copyrights";
import Image from 'next/image'
import Link from "next/link";
import buttonStyle from "../../../components/ui/button/button.module.scss";
import Profile from "../../../components/dashboard/profile";
import HeadSection from "../../../components/ui/Head";

const YourProfile: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <HeadSection title={t('Your Profile')}/>
                <Layout>
                    <main>
                        <section className={styles.banner}>
                            <Image src="/images/overview-banner.jpg" width="1920" height="400px" layout="intrinsic"/>
                        </section>
                        <section className={styles.content}>

                            <Profile/>

                            <section className={styles.main}>

                                <div className={styles.heading}>
                                    <h1>Your Profile</h1>
                                </div>


                                <div className={styles.profile}>

                                    <div className={styles.information}>
                                        <div className={styles.userDetails}>
                                            <div>
                                                <span>Name</span>
                                                <h1>Letho_35</h1>
                                            </div>

                                            <div className={styles.teamLink}>
                                                <div>
                                                    <span>Team</span>
                                                    <h1>Letho Guild Master</h1>
                                                </div>
                                                <Link href={""}><a>Modify your teams</a></Link>
                                            </div>
                                        </div>

                                        <div className={styles.form}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor="">Mail</label>
                                                <input type="email"/>
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label htmlFor="">password</label>
                                                <input type="password"/>
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label htmlFor="">Discord</label>
                                                <input type="text"/>
                                            </div>


                                            <div className={styles.formGroup}>
                                                <label htmlFor="">Referral Link</label>
                                                <input type="url"/>
                                            </div>
                                        </div>



                                        <div className={styles.gameIds}>

                                            <div className={styles.heading}>
                                                <p>Game Id</p>
                                            </div>

                                            <div className={styles.gameId}>
                                                <Image src="/images/fortnite.png" width="80" height="25"/>

                                                <div>
                                                    <span>CS:GO</span>
                                                    <h3>[B2F]-|Letho_35</h3>
                                                </div>
                                            </div>

                                        </div>


                                        <button className={buttonStyle.buttonOutline}>{t('save changes')}</button>

                                    </div>

                                    <div className={styles.profileImages}>
                                        <div>
                                            <Image src="/images/user.jpg" width="150" height="150px"
                                                   layout="intrinsic"/>
                                            <h4>profile picture</h4>
                                            <Link href={""}><a>change</a></Link>
                                        </div>
                                        <div>
                                            <Image src="/images/team-logo.png" width="150" height="150px"
                                                   layout="intrinsic"/>
                                            <h4>profile picture</h4>
                                            <Link href={""}><a>change</a></Link>
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

export default YourProfile