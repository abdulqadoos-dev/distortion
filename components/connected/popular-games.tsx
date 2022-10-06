import styles from "./popularGame.module.scss"

import {ReactSVG} from "react-svg";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import buttonStyle from "../ui/button/button.module.scss";

const PopularGames = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>{t('play most popular games')}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
            </div>

            <div className={styles.content}>

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

                    <div className={styles.game}>
                        <Image src={"/images/image 11.jpg"} width="230" height="350"/>
                    </div>


                </div>

                <div className={styles.viewMoreLink}>
                    <Link href="/">
                        <a className={buttonStyle.viewMore}>{t('view more')} <img src="/images/icons/arrow-right.svg"/></a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PopularGames