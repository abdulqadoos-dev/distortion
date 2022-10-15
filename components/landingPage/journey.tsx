import styles from "./journey.module.scss"
import buttonStyles from "../ui/button/button.module.scss"
import useTranslation from "next-translate/useTranslation";
import {ReactSVG} from "react-svg";

const Journey = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.logos}>
                    <ReactSVG src={'/images/tactics.svg'}/>
                    <ReactSVG src={'/images/leagues.svg'}/>
                </div>
                <div className={styles.alignCenter}>
                    <div className={styles.borderPrimary}></div>
                    <h3>Cross-game ecosystem</h3>
                    <h1>powering Gamers and Communities</h1>
                    <div className={styles.borderWhite}></div>

                </div>
                <div className={styles.logos}>
                    <ReactSVG src={'/images/valorant.svg'}/>
                    <ReactSVG src={'/images/csgo.svg'}/>
                </div>
            </div>
            <div className={styles.banner}>
                <div className={styles.content}>
                    <h1>Start your <br/> esport journey</h1>
                    <p>Make your play time count! </p>
                    <button className={buttonStyles.button}>{t('join-now')}</button>
                </div>
                <div className={styles.image}>
                    <img src="/images/experience.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Journey