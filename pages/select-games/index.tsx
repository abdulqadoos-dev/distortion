import {NextPage} from "next";
import styles from "./selectGame.module.scss";
import buttonStyles from "../../components/ui/button/button.module.scss";

import Head from "next/head";
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";



const Overview: NextPage = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Distortion</title>
                    <meta name="description" content="Distortion Dashboard"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <div className={styles.heading}>
                    <h1>{t("CHOOSE YOUR FAVORITE GAME")}</h1>
                    <p>Choose minimum 1 game you use to play</p>
                </div>

                <main className={styles.content}>

                    <div className={styles.search}>
                        <input type="search" placeholder="search"/>
                    </div>

                    <div className={styles.games}>
                        <div className={styles.game}>
                            <Image src={"/images/image 9.jpg"} width="230" height="350"/>
                        </div>

                        <div className={styles.game}>
                            <Image src={"/images/image 5.jpg"} width="230" height="350"/>
                        </div>

                        <div className={styles.game}>
                            <Image src={"/images/image 11.jpg"} width="230" height="350"/>
                        </div>

                        <div className={styles.game}>
                            <Image src={"/images/image 10.jpg"} width="230" height="350"/>
                        </div>

                    </div>

                    <div className={styles.actions}>
                        <p>Many more  are coming...</p>
                        <button className={buttonStyles.button}>{t('choose')}</button>
                    </div>

                </main>
            </div>
        </>
    )
}

export default Overview