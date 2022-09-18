import styles from "./experiences.module.scss"
import useTranslation from "next-translate/useTranslation";
import {ReactSVG} from 'react-svg'

const Experience = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>

            <div className={styles.heading}>
                <h1>Get the pro experience</h1>
                <p>Distortions provides the infrastructure to create challenges, skills, <br/> visibility, earnings and
                    emotions.</p>
            </div>

            <div className={styles.tabs}>
                <div className={styles.header}>
                    <div className={styles.item}>
                        <ReactSVG src={'/images/icons/tools.svg'}/>
                        <h3>Tools</h3>
                    </div>
                    <div className={styles.item}>
                        <ReactSVG src={'/images/icons/challenges.svg'}/>
                        <h3>Challenges</h3>
                    </div>
                    <div className={styles.item}>
                        <ReactSVG src={'/images/icons/skills.svg'}/>
                        <h3>Skills</h3>
                    </div>
                    <div className={styles.item}>
                        <ReactSVG src={'/images/icons/visibility.svg'}/>
                        <h3>Visibility</h3>
                    </div>
                    <div className={styles.item}>
                        <ReactSVG src={'/images/icons/earnings.svg'}/>
                        <h3>Earnings</h3>
                    </div>
                </div>
                <div className={styles.content}>

                    {/*<div className={styles.infrastructure}>*/}
                    {/*    <div className={styles.heading}>*/}
                    {/*        <h1>Infrastructure:</h1>*/}
                    {/*        <ReactSVG src={'/images/icons/underline.svg'}/>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.body}>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/assets-layer.svg'}/>*/}
                    {/*            <h3>cross-game assets</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/game-mode.svg'}/>*/}
                    {/*            <h3>Game Mode</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/passport.svg'}/>*/}
                    {/*            <h3>{"gamer's passport"}</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/anti-cheat.svg'}/>*/}
                    {/*            <h3>matchmaking + anti-cheat</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/tribes.svg'}/>*/}
                    {/*            <h3>self-governed tribes</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={styles.challenges}>*/}
                    {/*    <div className={styles.heading}>*/}
                    {/*        <h1>Challenges:</h1>*/}
                    {/*        <ReactSVG src={'/images/icons/underline.svg'}/>*/}
                    {/*        <p>Playing with distortions provides goals to thrive for.</p>*/}
                    {/*        <p>with a fair matching participate to game at stakes, competition and win cash prize</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.body}>*/}

                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/game-mode.svg'}/>*/}
                    {/*            <h3>single game</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/tournaments.svg'}/>*/}
                    {/*            <h3>tournaments</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/leagues.svg'}/>*/}
                    {/*            <h3>leagues</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div> */}

                    {/* <div className={styles.skills}>*/}
                    {/*    <div className={styles.heading}>*/}
                    {/*      <h1>Improve:</h1>*/}
                    {/*        <ReactSVG src={'/images/icons/underline.svg'}/>*/}
                    {/*        <h3>Monitor your progress with our data powered tools.</h3>*/}
                    {/*        <p>Identify what to improve and train with mission and fair challenges</p>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.body}>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/monitor.svg'}/>*/}
                    {/*            <h3>monitor</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/benchmark.svg'}/>*/}
                    {/*            <h3>benchmark</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/improve.svg'}/>*/}
                    {/*            <h3>improve</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>  */}

                    {/*<div className={styles.visibility}>*/}
                    {/*    <div className={styles.heading}>*/}
                    {/*        <h1>Visibility:</h1>*/}
                    {/*        <ReactSVG src={'/images/icons/underline.svg'}/>*/}
                    {/*        <h3>All our events and tournaments are live and streamed.</h3>*/}
                    {/*        <p>In addition to our regular tournaments we organize major events with your favorite players, streamers and offer you a*/}
                    {/*            chance to play against them in front of the world.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.body}>*/}

                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/streamed.svg'}/>*/}
                    {/*            <h3>streamed events</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/badges.svg'}/>*/}
                    {/*            <h3>badge and prestiges</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.icon}>*/}
                    {/*            <ReactSVG src={'/images/icons/story.svg'}/>*/}
                    {/*            <h3>ongoing story</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div> */}

                    <div className={styles.earnings}>
                        <div className={styles.heading}>
                            <h1>be rewarded:</h1>
                            <ReactSVG src={'/images/icons/underline.svg'}/>
                            <p>Every steps in your journey will grant you rewards in addition to your own earnings</p>
                        </div>
                        <div className={styles.body}>

                            <div className={styles.icon}>
                                <ReactSVG src={'/images/icons/assets.svg'}/>
                                <h3>assets</h3>
                            </div>
                            <div className={styles.icon}>
                                <ReactSVG src={'/images/icons/engagements.svg'}/>
                                <h3>engagements</h3>
                            </div>
                            <div className={styles.icon}>
                                <ReactSVG src={'/images/icons/performance.svg'}/>
                                <h3>performance rewards</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Experience