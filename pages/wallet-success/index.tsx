import {NextPage} from "next";
import styles from "./wallet-success.module.scss";
import buttonStyles from "../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";


const WalletSuccess: NextPage = () => {
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
                                <h1>{t('Congratulation!')}</h1>
                                <h1>{t('your wallet is created. !')}</h1>
                                <p>{'keep your seed phrase safe, it\'s your responsibility!'}</p>
                            </div>
                            <div className={styles.content}>
                                <p>Tips for storing it safely</p>
                                <ul>
                                    <li>{'• Save a backup in multiple locations.'}</li>
                                    <li>{'• Never share this phrase with anyone.'}</li>
                                    <li>{'• Beware of phishing! MetaMask will never spontaneously ask you for your seed phrase.'}</li>
                                    <li>{'• If you need to save your seed phrase again, you can find it in Settings -> Security.'}</li>
                                    <li>{'• If you have any questions or notice any discrepancies, contact our support department here.'}</li>
                                </ul>

                                <p>
                                    *Distortion cannot retrieve your seed phrase. <a href="">Learn more.</a>
                                </p>
                                <button className={buttonStyles.button}>{t('It\'s all over')}</button>
                                <button className={buttonStyles.buttonOutline}>
                                    {t('connect discord')}</button>
                            </div>
                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default WalletSuccess