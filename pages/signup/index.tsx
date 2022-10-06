import {NextPage} from "next";
import styles from "./signup.module.scss";
import buttonStyles from "../../components/ui/button/button.module.scss";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";
import HeadSection from "../../components/ui/Head";


const Signup: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <HeadSection title={t('Signup')}/>

                <Layout>
                    <main>
                        <section className={styles.container}>
                            <div className={styles.heading}>
                                <h1>{t('signup with distortion')}</h1>
                            </div>
                            <div className={styles.content}>
                                <div>

                                    <form action="">
                                        <input type="text" placeholder={t('nikcname')}/>
                                        <input type="password" placeholder={t('password')}/>
                                        <input type="date"/>
                                        <input type="text" placeholder={t('country')}/>
                                        <input type="email" placeholder={t('mail (optional)')}/>


                                        <div className={styles.checkbox}>
                                            <input type="checkbox" id="agreement" value="agreement"/>
                                            <label
                                                htmlFor="agreement">{t('i agree to privacy policy & user agreement')}</label>

                                        </div>

                                        <div className={styles.checkbox}>
                                            <input type="checkbox" id="newsletter" value="newsletter"/>
                                            <label
                                                htmlFor="newsletter">{t('i want to receive Distortion\'s newsletter')}</label>

                                        </div>


                                        <button className={buttonStyles.button}>{t('create an account')}</button>
                                    </form>

                                </div>
                                <img src="/images/signup.png" alt=""/>
                            </div>
                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default Signup