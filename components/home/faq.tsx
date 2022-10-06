import styles from './faq.module.scss'
import useTranslation from "next-translate/useTranslation";

const FAQ = () => {
    const {t, lang} = useTranslation('common')

    return (
        <>
            <div className={styles.container}>
                <h1>{t('FAQ')}</h1>

                <div className={styles.faqsListItems}>

                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <p>What is Distortion ?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>

                        <div className={styles.listItemContent}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates. Accusantium corporis dolores
                                ducimus ex id nostrum omnis, veniam voluptatum.</p>
                        </div>
                    </div>

                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <p>What is a non custodial wallet ?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={styles.listItemContent}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <p>How to send funds on my wallet?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={styles.listItemContent}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <p>How to participate to a tournament?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={styles.listItemContent}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}>
                        <div className={styles.listItemHeader}>
                            <p>How to claim my rewards?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={styles.listItemContent}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FAQ