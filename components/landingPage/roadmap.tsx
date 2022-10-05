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
                        <h3>pre launch</h3>
                        <small>(ongoing)</small>
                        <ul>
                            <li>- Dapp release v0</li>
                            <li>- First amateur tournaments</li>
                            <li>- Ambassador Onboarding</li>
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
                        <ReactSVG src="/images/icons/launch.svg" alt=""/>
                    </div>
                    <div>
                        <h3>launch</h3>
                        <ul>
                            <li>- Dapp release v0</li>
                            <li>- First amateur tournaments</li>
                            <li>- Ambassador Onboarding</li>
                        </ul>

                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>


                <div className={styles.item}>
                    <h2>q3 2024</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/nft.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Token & NFT</h3>
                        <ul>
                            <li>- Dapp release v0</li>
                            <li>- First amateur tournaments</li>
                            <li>- Ambassador Onboarding</li>
                        </ul>
                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <h2>q3 2024</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/scale.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Scale</h3>
                        <ul>
                            <li>- Dapp release v0</li>
                            <li>- First amateur tournaments</li>
                            <li>- Ambassador Onboarding</li>
                        </ul>
                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <h2>q3 2024</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/improve.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Improve</h3>
                        <ul>
                            <li>- Dapp release v0</li>
                            <li>- First amateur tournaments</li>
                            <li>- Ambassador Onboarding</li>
                        </ul>
                    </div>
                    <div className={styles.splitter}>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                        <ReactSVG src={'/images/icons/rm-line.svg'}/>
                    </div>
                </div>
                <div className={styles.item}>
                    <h2>q3 2024</h2>
                    <div className={styles.icon}>
                        <ReactSVG src="/images/icons/expand.svg" alt=""/>
                    </div>
                    <div>
                        <h3>Expand</h3>
                        <ul>
                            <li>- Dapp release v0</li>
                            <li>- First amateur tournaments</li>
                            <li>- Ambassador Onboarding</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Roadmap