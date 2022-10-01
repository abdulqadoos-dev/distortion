import styles from "./steps.module.scss"

import {ReactSVG} from "react-svg";
import useTranslation from "next-translate/useTranslation";
import buttonStyles from "../ui/button/button.module.scss";

const Steps = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <h1>{t('Your next steps')}</h1>
            </div>
            <div className={styles.content}>

                <div className={styles.card}>
                    <div className={styles.mainIcon}>
                        <ReactSVG src={"/images/icons/wallet-full.svg"}/>
                    </div>
                    <div className={styles.details}>
                        <h4>Create your Distortion account</h4>
                        <div className={styles.actions}>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <button className={buttonStyles.buttonOutline}>{t('succeded')}</button>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <ReactSVG src={"/images/icons/discord.svg"}/>
                    <div className={styles.details}>
                        <h4>Connect your Discord account</h4>
                        <p>&bull; Participate to tournaments</p>
                        <p>&bull; Obtain your rewards</p>
                        <p>&bull; Stay tuned on our last updates</p>
                        <div className={styles.actions}>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <div className={styles.ratio}><span>1</span>/4</div>
                            <button className={buttonStyles.buttonOutline}>{t('connect')}</button>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <ReactSVG src={"/images/icons/team.svg"}/>
                    <div className={styles.details}>
                        <h4>Create you team</h4>
                        <p>&bull; Invite your friends</p>
                        <p>&bull; Prepare your team</p>
                        <p>&bull; Obtain rewards</p>
                        <div className={styles.actions}>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <div className={styles.ratio}><span>1</span>/4</div>
                            <button className={buttonStyles.buttonOutline}>{t('create')}</button>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <ReactSVG src={"/images/icons/tournaments.svg"}/>
                    <div className={styles.details}>
                        <h4>Participate 1rst tournament </h4>
                        <p>&bull; Participate to tournaments</p>
                        <p>&bull; Obtain your rewards</p>
                        <p>&bull; Stay tuned on our last updates</p>

                        <div className={styles.actions}>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/trophy.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <div className={styles.icon}>
                                <ReactSVG src={"/images/icons/reward.svg"}/>
                                <p>100 xp</p>
                            </div>
                            <div className={styles.ratio}><span>1</span>/4</div>
                            <button className={buttonStyles.buttonOutline}>{t('participate')}</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Steps