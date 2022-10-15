import styles from './user.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {ReactSVG} from "react-svg";

const User = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.level}>
                    <div className={styles.levelIcon}></div>
                    <p>Level 21</p>
                </div>
                <div className={styles.xp}>
                    <div className={styles.points}>
                        <div className={styles.xpBackground}></div>
                        <div className={styles.xpBackgroundActive}></div>
                        <p>1922/2500 XP</p>
                    </div>
                    <div className={styles.notification}>
                        <ReactSVG src="/images/icons/bell.svg"/>
                    </div>
                </div>
                <div className={styles.borderBottom}></div>
            </div>

            <div className={styles.image}>
                <Image src={'/images/user.jpg'} width={"100px"} height={"100px"}/>
            </div>
        </div>
    )
}

export default User