import styles from "./profile.module.scss";
import Image from "next/image";
import {ReactSVG} from "react-svg";
import buttonStyles from "../ui/button/button.module.scss";
import useTranslation from "next-translate/useTranslation";

const Profile = () => {
    const {t, lang} = useTranslation('common')

    return(
        <section className={styles.profile}>

            <div className={styles.header}>
                <div className={styles.image}>
                    <Image src="/images/user.jpg" width="80" height="80" layout="intrinsic"/>
                </div>
                <div className={styles.bio}>
                    <h3>Anthony levy</h3>
                    <p>bronze</p>
                    <span>240 Tournaments</span>
                </div>
                <div className={styles.rank}>
                    <span>21</span>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.list}>
                    <div className={styles.points}>
                        <p>Distortion Points</p>
                        <span>2345</span>
                    </div>
                    <div className={styles.performance}>
                        <p>Tournament Performance</p>
                        <div>
                            <span>7</span>
                            <ReactSVG src={'/images/icons/trophy-yellow.svg'}/>
                            <span>7 </span>
                            <ReactSVG src={'/images/icons/trophy-gray.svg'}/>
                            <span>7</span>
                            <ReactSVG src={'/images/icons/trophy-orange.svg'}/>
                        </div>
                    </div>

                    <div className={styles.ratio}>
                        <p>Ratio</p>
                        <div>
                            <span>118 W  </span> / <span>92 L  </span>
                        </div>
                    </div>
                </div>
            </div>

            <button className={buttonStyles.button}>{t('Referral Link')}</button>

            <div className={styles.leaderboard}>
                <div className={styles.row}>
                    <Image src="/images/fortnite.png" width="80px" height="30"
                           layout="intrinsic"/>
                    <div className={styles.points}>
                        <p>Distortion Points</p>
                        <span>2345</span>
                    </div>
                    <div className={styles.performance}>
                        <p>Tournament Performance</p>
                        <div>
                            <span>7 </span>
                            <ReactSVG src={'/images/icons/trophy-yellow.svg'}/>
                            <span>7 </span>
                            <ReactSVG src={'/images/icons/trophy-gray.svg'}/>
                            <span>7 </span>
                            <ReactSVG src={'/images/icons/trophy-orange.svg'}/>
                        </div>
                    </div>
                    <div className={styles.ratio}>
                        <p>Ratio</p>
                        <div>
                            <span>118 W  </span> / <span>92 L  </span>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image src="/images/fortnite.png" width="80px" height="30"
                           layout="intrinsic"/>
                    <div className={styles.points}>
                        <p>Distortion Points</p>
                        <span>2345</span>
                    </div>
                    <div className={styles.performance}>
                        <p>Tournament Performance</p>
                        <div>
                            <span>7 </span>
                            <ReactSVG src={'/images/icons/trophy-yellow.svg'}/>
                            <span>7 </span>
                            <ReactSVG src={'/images/icons/trophy-gray.svg'}/>
                            <span>7 </span>
                            <ReactSVG src={'/images/icons/trophy-orange.svg'}/>
                        </div>
                    </div>
                    <div className={styles.ratio}>
                        <p>Ratio</p>
                        <div>
                            <span>118 W  </span> / <span>92 L  </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
