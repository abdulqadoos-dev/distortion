import {NextPage} from "next";
import styles from "./user-information.module.scss";
import buttonStyles from "../../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";


const UserInformation: NextPage = () => {
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
                        <section className={styles.container}>
                            <div className={styles.heading}>
                                <h1>{t('user information!')}</h1>
                            </div>
                            <div className={styles.content}>

                                <form action="">
                                    <label htmlFor="">chose username</label>
                                    <input type="text"/>

                                    <label htmlFor="">Date of birth (DD/MM/YYYY)</label>
                                    <input type="date"/>

                                    <label htmlFor="">Your mail (optional)</label>
                                    <input type="email"/>

                                    <label htmlFor="">New password (min 8 characters)</label>
                                    <input type="password"/>

                                    <label htmlFor="">Confirm password</label>
                                    <input type="password"/>


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
                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default UserInformation