import styles from "./experiences.module.scss"
import useTranslation from "next-translate/useTranslation";
import {ReactSVG} from 'react-svg'
import {useState} from "react";

const Experience = () => {
    const {t, lang} = useTranslation('common')

    const [activeExperienceTab, setActiveExperienceTab] = useState("TOOLS")


    const _renderExperienceTabsContent = () => {
        switch (activeExperienceTab) {
            case "TOOLS":
                return <div className={styles.infrastructure}>
                    <div className={styles.heading}>
                        <h1>Infrastructure:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Empowering Gamers with the technology, tools,</br>and financial layer to thrive.</h3>
                        <p>Distortion uses Blockchain to make in-game datas immutable and give Gamers true</br>ownership on their assets & reputation. It fosters fairness and self-determination.</p>
                    </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/assets-layer.svg'}/>
                            <h3>cross-game assets</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/game-mode.svg'}/>
                            <h3>Game Mode</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/passport.svg'}/>
                            <h3>{"gamer's passport"}</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/anti-cheat.svg'}/>
                            <h3>matchmaking + anti-cheat</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tribes.svg'}/>
                            <h3>self-governed tribes</h3>
                        </div>
                    </div>
                </div>

            case "CHALLENGES" :
                return <div className={styles.challenges}>
                    <div className={styles.heading}>
                        <h1>Challenges:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                          <h3>Playing with Distortion provides a purpose & goals to thrive for.</h3>
                        <p>Participate in fair and purposeful games to improve, grow the ladder, achieve</br>missions and win cashprizes.</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/game-mode.svg'}/>
                            <h3>single game</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tournaments.svg'}/>
                            <h3>tournaments</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/leagues.svg'}/>
                            <h3>leagues</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/ingame-tracking.svg'}/>
                            <h3>in game tracking</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/mission.svg'}/>
                            <h3>mission </h3>
                        </div>
                    </div>
                </div>

            case "SKILLS":
                return <div className={styles.skills}>
                    <div className={styles.heading}>
                        <h1>Improve:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Monitor your progress and benchmark yourself with</br>our data powered tools.</h3>
                        <p>Identify your flaws and train on them with missions, fair challenges and pro tutorials.</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/monitor.svg'}/>
                            <h3>monitor</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/benchmark.svg'}/>
                            <h3>benchmark</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/improve.svg'}/>
                            <h3>improve</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/matchmaking-system.svg'}/>
                            <h3>Matchmaking System</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tutorials.svg'}/>
                            <h3>TUTORIALS</h3>
                        </div>
                    </div>
                </div>
            case "VISIBILITY" :
                return <div className={styles.visibility}>
                    <div className={styles.heading}>
                        <h1>Visibility:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Don’t Stay unnoticed </br>Join our Leagues & Tournaments with agnostic ladder</h3>
                        <p>Play alongside streamers, pro players, and the stars of tomorrow in our streamed</br>competitions. Stand out to grow a community, get financed by them or hired.
                        </p>
                    </div>
                    <div className={styles.body}>

                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/streamed.svg'}/>
                            <h3>streamed events</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/badges.svg'}/>
                            <h3>badge and prestiges</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/story.svg'}/>
                            <h3>ongoing story</h3>
                        </div>

                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/ladder.svg'}/>
                            <h3>Performance Ladder</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/leagues-experience.svg'}/>
                            <h3>Amateur Leagues</h3>
                        </div>
                    </div>
                </div>

            case "EARNINGS" :
                return <div className={styles.earnings}>
                    <div className={styles.heading}>
                        <h1>Earnings:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Be rewarded for your efforts, perfomances and</br>investments & kickstart your career or side hustle.</h3>
                        <p>Every step of your journey shall be paved with rewards, performance</br>earnings, and valuable cross-game assets.</p>
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
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/loot-box.svg'}/>
                            <h3>Lootboxes</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/cash-prizes.svg'}/>
                            <h3>Cashprizes</h3>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tokens.svg'}/>
                            <h3>TOKENS</h3>
                        </div>
                    </div>
                </div>
        }
    }

    return (
        <section className={styles.container}>

            <div className={styles.heading}>
                <h1>Get the pro experience</h1>
                <p>Distortion provides the infrastructure to reinstate the thrill of the competition, improve your skills, and get access to visibility & earnings.</p>
            </div>

            <div className={styles.tabs}>
                <div className={styles.header}>
                    <div
                        className={styles.item}
                        onClick={() => setActiveExperienceTab("TOOLS")}
                    >
                        <ReactSVG src={'/images/icons/tools.svg'}/>
                        <h3>Tools</h3>
                    </div>
                    <div
                        className={styles.item}
                        onClick={() => setActiveExperienceTab("CHALLENGES")}
                    >
                        <ReactSVG src={'/images/icons/challenges.svg'}/>
                        <h3>Challenges</h3>
                    </div>
                    <div
                        className={styles.item}
                        onClick={() => setActiveExperienceTab("SKILLS")}
                    >
                        <ReactSVG src={'/images/icons/skills.svg'}/>
                        <h3>Skills</h3>
                    </div>
                    <div
                        className={styles.item}
                        onClick={() => setActiveExperienceTab("VISIBILITY")}
                    >
                        <ReactSVG src={'/images/icons/visibility.svg'}/>
                        <h3>Visibility</h3>
                    </div>
                    <div
                        className={styles.item}
                        onClick={() => setActiveExperienceTab("EARNINGS")}
                    >
                        <ReactSVG src={'/images/icons/earnings.svg'}/>
                        <h3>Earnings</h3>
                    </div>
                </div>
                <div className={styles.content}>
                    {_renderExperienceTabsContent()}
                </div>
            </div>
        </section>
    )
}

export default Experience