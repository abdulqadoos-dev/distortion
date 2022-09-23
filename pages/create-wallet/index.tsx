import {NextPage} from "next";
import styles from "./create-wallet.module.scss";
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
                                <h1>{t('NEW ON DISTORTION')}</h1>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.box}>
                                    <ReactSVG src="/images/icons/wallet.svg"/>
                                    <p>Yes, go to the configuration! This will create a new wallet and a new mnemonic
                                        phrase</p>
                                    <button className={buttonStyles.button}>{t('create a wallet')}</button>
                                </div>
                            </div>

                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default RecoverPassword