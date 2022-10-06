import {NextPage} from "next";
import styles from "./login.module.scss";
import buttonStyles from "../../components/ui/button/button.module.scss";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";
import HeadSection from "../../components/ui/Head";


const Login: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <HeadSection title={t('Login')}/>

                <Layout>
                    <main>
                        <section className={styles.container}>
                            <div className={styles.heading}>
                                <h1>{t('signup with distortion')}</h1>
                            </div>
                            <div className={styles.content}>
                                <p>Distortion offers a non custodial wallet. It allows you to be the keymaster and only
                                    owner of your account and its asset.</p>
                                <button
                                    className={buttonStyles.buttonOutline}>{t('connect with wallet connect')}</button>
                                <button className={buttonStyles.buttonOutline}>{t('connect with discord')}</button>
                                <hr/>
                                <button className={buttonStyles.buttonOutline}>{t('create an account')}</button>
                            </div>
                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default Login