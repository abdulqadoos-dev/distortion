import {NextPage} from "next";
import styles from "./mnemonic.module.scss";
import buttonStyles from "../../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";
import HeadSection from "../../../components/ui/Head";


const ConfirmMnemonic: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <HeadSection title={t('Confirm')}/>

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