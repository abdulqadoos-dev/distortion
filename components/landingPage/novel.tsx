import styles from './novel.module.scss'
import buttonStyles from '../ui/button/button.module.scss'
import useTranslation from "next-translate/useTranslation";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Novel = () => {
    const {t, lang} = useTranslation('common')
    const images = [
        "/images/slide-1.jpeg",
        "/images/slide-2.jpeg",
        "/images/slide-4.jpeg",
    ];
    return (
        <section className={styles.container}>
            <Slide>
                <div className={styles.eachSlideEffect}>
                    <div style={{'backgroundImage': `url(${images[0]})`}}>
                        <div className={styles.content}>
                            <h1>Immerse yourself </h1>
                            <h1>in the Gamified</h1>
                            <h1>world of Distortion</h1>
                            <p>Your actions make Your success, Your tribe success, and a lasting impact </p>
                            <button className={buttonStyles.button}>{t('read the novel')}</button>
                        </div>
                    </div>
                </div>
                <div className={styles.eachSlideEffect}>
                    <div style={{'backgroundImage': `url(${images[1]})`}}>
                        <div className={styles.content}>
                            <h1>Immerse yourself </h1>
                            <h1>in the Gamified</h1>
                            <h1>world of Distortion</h1>
                            <p>Your actions make Your success, Your tribe success, and a lasting impact </p>
                            <button className={buttonStyles.button}>{t('read the novel')}</button>
                        </div>
                    </div>
                </div>

                <div className={styles.eachSlideEffect}>
                    <div style={{'backgroundImage': `url(${images[2]})`}}>
                        <div className={styles.content}>
                            <h1>Immerse yourself </h1>
                            <h1>in the Gamified</h1>
                            <h1>world of Distortion</h1>
                            <p>Your actions make Your success, Your tribe success, and a lasting impact </p>
                            <button className={buttonStyles.button}>{t('read the novel')}</button>
                        </div>
                    </div>
                </div>

            </Slide>

        </section>
    )
}

export default Novel