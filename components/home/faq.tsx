import styles from './faq.module.scss'
import useTranslation from "next-translate/useTranslation";
import {useState} from "react";

const FAQ = () : JSX.Element => {
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates. Accusantium corporis dolores
                                ducimus ex id nostrum omnis, veniam voluptatum.</p>
                        </div>
                    </div>

                    <div className={styles.listItem} onClick={() => activeTab === 2 ? setActiveTab(0) : setActiveTab(2)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 2 &&  styles.listItemHeaderActive}`}>
                            <p>What is a non custodial wallet ?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 2 && styles.listItemContentActive}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}  onClick={() => activeTab === 3 ? setActiveTab(0) : setActiveTab(3)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 3 &&  styles.listItemHeaderActive}`}>
                            <p>How to send funds on my wallet?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 3 && styles.listItemContentActive}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}  onClick={() => activeTab === 4 ? setActiveTab(0) : setActiveTab(4)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 4 &&  styles.listItemHeaderActive}`}>
                            <p>How to participate to a tournament?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 4 && styles.listItemContentActive}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>
                    <div className={styles.listItem}  onClick={() => activeTab === 5 ? setActiveTab(0) : setActiveTab(5)}>
                        <div className={`${styles.listItemHeader}  ${activeTab === 5 &&  styles.listItemHeaderActive}`}>
                            <p>How to claim my rewards?</p>
                            <img src="/images/icons/chevron-up.svg" alt=""/>
                        </div>
                        <div className={`${styles.listItemContent} ${activeTab === 5 && styles.listItemContentActive}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores esse illum
                                itaque libero nulla porro quos similique, unde voluptates.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FAQ;