import {NextPage} from "next";
import styles from "./signup-success.module.scss";
import buttonStyles from "../../../components/ui/button/button.module.scss";
import Head from "next/head";
import {ReactSVG} from 'react-svg'
import Layout from "../../../components/layout/layout";
import useTranslation from "next-translate/useTranslation";
import HeadSection from "../../../components/ui/Head";


const SignupSuccess: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <HeadSection title={t('Success')}/>

                <Layout>
                    <main>
                        <section className={styles.container}>
                            <div className={styles.heading}>
                                <h1>{t('Congratulation!')}</h1>
                                <p> your account is created. </p>
                                <p>To finalize the process connect your discord</p>
                            </div>
                            <div className={styles.content}>
                                <h3>
                                    In Distortion beta you need to connect your Discord to participate into tournaments
                                    and earn points.
                                </h3>
                                <ReactSVG src={'/images/icons/discord.svg'}/>
                                <button className={buttonStyles.button}>{t('connect your discord')}</button>
                                <h4>{t('skip do it later')}</h4>
                            </div>
                        </section>
                    </main>
                </Layout>
            </div>
        </>
    )
}

export default SignupSuccess