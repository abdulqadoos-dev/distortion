import {NextPage} from "next";
import styles from "./mnemonic.module.scss";
import buttonStyles from "../../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";


const ConfirmMnemonic: NextPage = () => {
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
                                <h1>{t('Confirm your mnemonic phrase')}</h1>
                                <p>Please select each sentence to ensure it is correct.</p>
                            </div>
                            <div className={styles.content}>

                                <div className={styles.selectedOptionsContainer}>
                                    <div className={styles.option}>onion</div>
                                    <div className={styles.option}>lunar</div>
                                    <div className={styles.option}>wage</div>
                                </div>

                                <div className={styles.optionsContainer}>
                                    <div className={styles.option}>onion</div>
                                    <div className={styles.option}>lunar</div>
                                    <div className={styles.option}>wage</div>
                                    <div className={styles.option}>group</div>
                                </div>

                                <button className={buttonStyles.button}>{t('confirm')}</button>
                            </div>
                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default ConfirmMnemonic