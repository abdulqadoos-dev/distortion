import {NextPage} from "next";
import useTranslation from "next-translate/useTranslation";
import styles from "./redeem-reward.module.scss";
import {ReactSVG} from 'react-svg'
import buttonStyles from "../../../components/ui/button/button.module.scss";
import {useEffect, useState} from "react";


const RedeemReward = () => {
    const {t, lang} = useTranslation('common')
    const [active, setActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(true);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (active) {
        return (
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.close} onClick={() => setActive(false)}>
                        <ReactSVG src={"/images/icons/close.svg"}/>
                    </div>
                    <div className={styles.heading}>
                        <h1>CONGRATULATIONS</h1>
                        <p>You earned the following items:</p>
                    </div>
                    <div className={styles.rewards}>
                        <div className={styles.reward}>
                            <ReactSVG src={"/images/icons/money.svg"}/>
                            <h1>10$</h1>
                            <h3>FREE PASS</h3>
                        </div>
                        <div className={styles.reward}>
                            <ReactSVG src={"/images/icons/points.svg"}/>
                            <h1>10</h1>
                            <h3>RIOT POINT </h3>
                        </div>
                        <div className={styles.reward}>
                            <ReactSVG src={"/images/icons/boost.svg"}/>
                            <h1>10</h1>
                            <h3>nitro boost</h3>
                        </div>
                    </div>

                    <button className={buttonStyles.button}>{t('redeem your reward')}</button>
                </div>
            </section>
        )
    }
}

export default RedeemReward