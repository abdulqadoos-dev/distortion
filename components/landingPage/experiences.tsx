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
                        <h3>Empowering Gamers with the technology, tools, and financial layer to thrive</h3>
                        <p>Distortion uses Blockchain to make in-game datas immutable and give Gamers true ownership 
                        on their assets & reputation. It fosters fairness and self-determination.</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/assets-layer.svg'}/>
                            <h4>cross-game assets</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/game-mode.svg'}/>
                            <h4>Game Mode</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/passport.svg'}/>
                            <h4>{"gamer's passport"}</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/anti-cheat.svg'}/>
                            <h4>matchmaking + anti-cheat</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tribes.svg'}/>
                            <h4>self-governed tribes</h4>
                        </div>
                    </div>
                </div>

            case "CHALLENGES" :
                return <div className={styles.challenges}>
                    <div className={styles.heading}>
                        <h1>Challenges:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Playing with Distortion provides a purpose & goals to thrive for.</h3>
                        <p>Participate in fair and purposeful games to improve, grow the ladder, 
                        achieve missions and win cashprizes.</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/game-mode.svg'}/>
                            <h4>single game</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tournaments.svg'}/>
                            <h4>tournaments</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/leagues.svg'}/>
                            <h4>leagues</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/ingame-tracking.svg'}/>
                            <h4>in game tracking</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/mission.svg'}/>
                            <h4>mission </h4>
                        </div>
                    </div>
                </div>

            case "SKILLS":
                return <div className={styles.skills}>
                    <div className={styles.heading}>
                        <h1>Improve:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Monitor your progress and benchmark yourself with our data powered tools.</h3>
                        <p>Identify your flaws and train on them with missions, fair challenges, and pro tutorials.</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/monitor.svg'}/>
                            <h4>monitor</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/benchmark.svg'}/>
                            <h4>benchmark</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/improve.svg'}/>
                            <h4>improve</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/matchmaking-system.svg'}/>
                            <h4>Matchmaking System</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tutorials.svg'}/>
                            <h4>TUTORIALS</h4>
                        </div>
                    </div>
                </div>
            case "VISIBILITY" :
                return <div className={styles.visibility}>
                    <div className={styles.heading}>
                        <h1>Visibility:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Don’t Stay unnoticed Join our Leagues & Tournaments with agnostic ladde</h3>
                        <p>Play alongside streamers, pro players, and the stars of tomorrow in our streamed 
                        competitions. Stand out to grow a community, get financed by them or hired.</p>
                    </div>
                    <div className={styles.body}>

                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/streamed.svg'}/>
                            <h4>streamed events</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/badges.svg'}/>
                            <h4>badge and prestiges</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/story.svg'}/>
                            <h4>ongoing story</h4>
                        </div>

                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/ladder.svg'}/>
                            <h4>Performance Ladder</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/leagues-experience.svg'}/>
                            <h4>Amateur Leagues</h4>
                        </div>
                    </div>
                </div>

            case "EARNINGS" :
                return <div className={styles.earnings}>
                    <div className={styles.heading}>
                        <h1>be rewarded:</h1>
                        <ReactSVG src={'/images/icons/underline.svg'}/>
                        <h3>Be rewarded for your efforts, perfomances and investments & kickstart your career or side hustle.</h3>
                        <p>Every step of your journey shall be paved with rewards, performance earnings, and valuable cross-game assets.</p>
                    </div>
                    <div className={styles.body}>

                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/assets.svg'}/>
                            <h4>assets</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/engagements.svg'}/>
                            <h4>engagements</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/performance.svg'}/>
                            <h4>performance rewards</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/loot-box.svg'}/>
                            <h4>Lootboxes</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/cash-prizes.svg'}/>
                            <h4>Cashprizes</h4>
                        </div>
                        <div className={styles.icon}>
                            <ReactSVG src={'/images/icons/tokens.svg'}/>
                            <h4>TOKENS</h4>
                        </div>
                    </div>
                </div>
        }
    }

    return (
        <section className={styles.container}>

            <div className={styles.heading}>
                <h1>Get the pro experience</h1>
                <p>Distortions provides the infrastructure to create challenges, skills, <br/> visibility, earnings and
                    emotions.</p>
            </div>

            <div className={styles.tabs}>
                <div className={styles.header}>
                    <div
                        className={`${styles.item}  ${activeExperienceTab === "TOOLS" && styles.active}`}
                        onClick={() => setActiveExperienceTab("TOOLS")}
                    >
                        <ReactSVG src={'/images/icons/tools.svg'}/>
                        <h4>Tools</h4>
                    </div>
                    <div
                        className={`${styles.item}  ${activeExperienceTab === "CHALLENGES" && styles.active}`}
                        onClick={() => setActiveExperienceTab("CHALLENGES")}
                    >
                        <ReactSVG src={'/images/icons/challenges.svg'}/>
                        <h4>Challenges</h4>
                    </div>
                    <div
                        className={`${styles.item}  ${activeExperienceTab === "SKILLS" && styles.active}`}
                        onClick={() => setActiveExperienceTab("SKILLS")}
                    >
                        <ReactSVG src={'/images/icons/skills.svg'}/>
                        <h4>Skills</h4>
                    </div>
                    <div
                         className={`${styles.item}  ${activeExperienceTab === "VISIBILITY" && styles.active}`}
                        onClick={() => setActiveExperienceTab("VISIBILITY")}
                    >
                        <ReactSVG src={'/images/icons/visibility.svg'}/>
                        <h4>Visibility</h4>
                    </div>
                    <div
                         className={`${styles.item}  ${activeExperienceTab === "EARNINGS" && styles.active}`}
                        onClick={() => setActiveExperienceTab("EARNINGS")}
                    >
                        <ReactSVG src={'/images/icons/earnings.svg'}/>
                        <h4>Earnings</h4>
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