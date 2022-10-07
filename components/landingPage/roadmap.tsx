import styles from "./roadmap.module.scss"
import useTranslation from "next-translate/useTranslation";
import {ReactSVG} from 'react-svg'

const Roadmap = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section id="roadmap" className={styles.container}>
            <div className={styles.heading}>
                <h1>Roadmap</h1>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <h2>q3 2024</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/pre-launch.svg" alt=""/>
                    </div>
                    <div>
                        <h3>pre-launch</h3>
                        <small>(ongoing)</small>
                        <ul>
                            <li>- Dapp release Beta</li>
                            <li>- Token Fundraiser</li>
                            <li>- Ambassador Program</li>
                            <li>- Amateur & Exhibition Tournaments</li>
                            <li>- Hiring (10 roles)</li>
                        </ul>
                    </div>

                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>


                <div className={styles.item}>
                    <h2>q4 2022</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/launch.svg" alt=""/>
                    </div>
                    <div>
                        <h3>launch</h3>
                        <ul>
                            <li>- Dapp release v1</li>
                            <li>- Integrating 4 games</li>
                            <li>- Instant Games & Tournaments</li>
                            <li>- Performance Missions</li>
                            <li>- Streamer Program</li>
                        </ul>

                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>


                <div className={styles.item}>
                    <h2>q1 2023</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/nft.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Token & NFT</h3>
                        <ul>
                            <li>- Mainnet Launch</li>
                            <li>- Token & NFT Sales</li>
                            <li>- Stacking program</li>
                            <li>- Monthly Tribes Competitions</li>
                            <li>- Guild Features</li>
                        </ul>
                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <h2>q2 2023</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/scale.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Scale</h3>
                        <ul>
                            <li>- Mobile App</li>
                            <li>- Tournaments Hosting</li>
                            <li>- Matchmaking</li>
                            <li>- 5 more games</li>
                            <li>- Tribes & DAO treasury</li>
                        </ul>
                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <h2>q3 2023</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/improve.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Land</h3>
                        <ul>
                            <li>- Player Crowdfunding</li>
                            <li>- More tournament models</li>
                            <li>- Test Phase of new gaming Vertical</li>
                            <li>- Sponsorship Program</li>
                            <li>- Launchpad</li>
                        </ul>
                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <h2>q4 2023</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/expand.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Expand</h3>
                        <ul>
                            <li>- Season 2 release</li>
                            <li>- Distortion World Cup</li>
                            <li>- Training features</li>
                            <li>- 7 more Games</li>
                            <li>- Layer 1 announcement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap