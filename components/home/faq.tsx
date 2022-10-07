import styles from './faq.module.scss'
import useTranslation from "next-translate/useTranslation";
import {useState} from "react";

const FAQ = () => {
    const {t, lang} = useTranslation('common')

    const [activeTab, setActiveTab] = useState<number>(0)


    return (
        <>
            <div className={styles.container}>
                <h1>{t('FAQ')}</h1>

                <div className={styles.faqsListItems}>

                    <div className={styles.listItem} onClick={() => activeTab === 1 ? setActiveTab(0) : setActiveTab(1)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 1 &&  styles.listItemHeaderActive}`}>
                            <p>What is Distortion ?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>

                        <div className={`${styles.listItemContent} ${activeTab === 1 && styles.listItemContentActive}`}>
                            <p>Distortion is a community driven application providing products and services on top of popular AAA games. It gives you the tools to improve their skills, a playground to participate in fair games with and without stake, and an economy rewarding efforts, and performances. Distortion gamifies the playing experience with a story that is a direct parallel to the World we live in, and where your actions have an impact in the Gamification but also in the real world.</p>
                        </div>
                    </div>

                    <div className={styles.listItem} onClick={() => activeTab === 2 ? setActiveTab(0) : setActiveTab(2)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 2 &&  styles.listItemHeaderActive}`}>
                            <p>What is a non custodial wallet ?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 2 && styles.listItemContentActive}`}>
                            <p>A non-custodial wallet is a vault that controls your cryptocurrencies, and assets, and to which you have the control of its private keys, proving the funds are yours.
                                In Distortion your wallet is your Unique Identifier that allows you to earn, receive, transact rewards (funds and assets).
                                Distortion has no access, power or control on it.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}  onClick={() => activeTab === 3 ? setActiveTab(0) : setActiveTab(3)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 3 &&  styles.listItemHeaderActive}`}>
                            <p>How to send funds on my wallet?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 3 && styles.listItemContentActive}`}>
                            <p>You will initially be able to use external accepted tokens/coins from exchanges (Bitcoin, ETH, MATIC, USDC, exhaustive list in the upcoming paper), and receive your rewards in DTR or external coins. As soon as the DTR token is listed on its first exchange you will be able to purchase DTR directly from a Decentralized Exchange from Distortion Application.
                                More on that in the Distortion paper soon.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}  onClick={() => activeTab === 4 ? setActiveTab(0) : setActiveTab(4)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 4 &&  styles.listItemHeaderActive}`}>
                            <p>How to participate in a Game or a tournament?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 4 && styles.listItemContentActive}`}>
                            <p>
                                In the Distortion Alpha version we’re creating amateur and exhibition tournaments. After creating your team(s) or joining one will be able to register for a tournament and test the different Distortion tournaments model. As per our v1 release, you’ll have a quantity of tournaments daily and will be able to create your own, or just participate into an instant game. All the featured tournaments will be listed in the “Tournaments” category.
                            </p>
                        </div>
                    </div>
                    <div className={styles.listItem}  onClick={() => activeTab === 5 ? setActiveTab(0) : setActiveTab(5)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 5 &&  styles.listItemHeaderActive}`}>
                            <p>How to claim my rewards?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 5 && styles.listItemContentActive}`}>
                            <p>From the upcoming Alpha version you can start accumulating rewards from your Game performances (instant game, tournaments, …)  that are claimable from your application Tournament page and engagement rewards redeemable from Loot Boxes.
                                Both are secured and stored in your wallet using secured smart contracts powered by Blockchain.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FAQ