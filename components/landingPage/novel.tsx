import styles from './novel.module.scss'
import buttonStyles from '../ui/button/button.module.scss'
import useTranslation from "next-translate/useTranslation";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Novel = () => {
    const {t, lang} = useTranslation('common')
    const images = [
        "/images/AIR.jpg",
        "/images/FIRE.jpg",
        "/images/EAU.jpg",
        "/images/TERRE.jpg",
    ];
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>Immerse yourself </h1>
                <h1>in the Ramified</h1>
                <h1>world of Distortion</h1>
                <p>Your actions make Your success, Your tribe success, and a lasting impact </p>
                <button className={buttonStyles.button}>{t('read the novel')}</button>
            </div>

            <Slide>
                <div className={styles.eachSlideEffect}>
                    <div style={{'backgroundImage': `url(${images[0]})`}}></div>
                </div>
                <div className={styles.eachSlideEffect}>
                    <div style={{'backgroundImage': `url(${images[1]})`}}></div>
                </div>
                <div className={styles.eachSlideEffect}>
                    <div style={{'backgroundImage': `url(${images[2]})`}}></div>
                </div>
                <div className={styles.eachSlideEffect}>
                    <div style={{'backgroundImage': `url(${images[3]})`}}></div>
                </div>
            </Slide>

        </section>
    )
}

export default Novel