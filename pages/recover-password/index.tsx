import {NextPage} from "next";
import styles from "./recover-password.module.scss";
import buttonStyles from "../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";


const RecoverPassword: NextPage = () => {
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
                                <h1>{t('Recovery passphrase')}</h1>
                                <p>
                                    Your secret backup phrase makes it easy to back up and restore your account.
                                </p>
                                <p><big>WARNING:</big> Never reveal your recovery passphrase. Anyone can use it and
                                    permanently steal your account.</p>
                            </div>
                            <div className={styles.content}>
                                <p>onion lunar wage group sword pill september oven harsh border ticket kite</p>
                            </div>
                            <button className={buttonStyles.button}>{t('next')}</button>
                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default RecoverPassword