import TournamentCard from './tournamentCard';
import styles from './upcoming.module.scss';
import buttonStyle from '../ui/button/button.module.scss';
import stylesBlockUi from '../ui/blockUi.module.scss';
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';
import {ReactSVG} from "react-svg";

const UpcomingTournaments = () => {
    const {t, lang} = useTranslation('common')

    return (
        <section className={styles.container}>
            <h1>
                {t('upcoming tournaments')}
                <ReactSVG src={"/images/icons/coming-soon.svg"}/>
            </h1>
            {/*<div className={stylesBlockUi.container}>*/}
            {/*    <h1>*/}
            {/*        <ReactSVG src={"/images/icons/coming-soon.svg"}/>*/}
            {/*        {t('Coming soon...')}*/}
            {/*    </h1>*/}
            {/*</div>*/}

            <div className={styles.tournamentCardContainer}>
                <TournamentCard name='Valorant'/>
                <TournamentCard name='Valorant'/>
                <TournamentCard name='Valorant'/>
                <TournamentCard name='Valorant'/>
            </div>

            <div className={styles.viewMoreLink}>
                <Link href="/">
                    <a className={buttonStyle.viewMore}>{t('view more')} <img src="/images/icons/arrow-right.svg"/></a>
                </Link>
            </div>

        </section>

    )
}

export default UpcomingTournaments