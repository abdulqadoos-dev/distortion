import styles from './slide.module.scss'
import buttonStyles from '../ui/button/button.module.scss'
import useTranslation from "next-translate/useTranslation";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const {t, lang} = useTranslation('common')
    const images = [
        "/images/home-play.png",
        "/images/tournament-banner.jpg",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    return (
        <section className={styles.container}>
            <Slide>
                <div className={styles.eachSlideEffect}>
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                        <div className={styles.content}>
                            <h1>Play & Earn with your favorite games</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className={buttonStyles.button}>{t('join-now')}</button>
                        </div>
                    </div>
                </div>
                 <div className={styles.eachSlideEffect}>
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                        <div className={styles.content}>
                            <h1>Play & Earn with your favorite games</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className={buttonStyles.button}>{t('join-now')}</button>
                        </div>
                    </div>
                </div>
                 <div className={styles.eachSlideEffect}>
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                        <div className={styles.content}>
                            <h1>Play & Earn with your favorite games</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className={buttonStyles.button}>{t('join-now')}</button>
                        </div>
                    </div>
                </div>
            </Slide>

        </section>
    )
}

export default Slider