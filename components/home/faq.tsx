import styles from './faq.module.scss'

const FAQ = () => {
  return (
    <>
      <div className={styles.faq}>
        <h2>FAQ</h2>
        <ul>
          <li>What is Distortion ?</li>
          <li>What is a non custodial wallet ?</li>
          <li>How to send fund to my wallet ?</li>
        </ul>
      </div>
    </>
  )
}

export default FAQ