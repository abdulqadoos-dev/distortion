import styles from './logo.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const Logo = (): JSX.Element => {
    return (
        <div className={styles.logo}>
            <Link href={"/"}>
                <a>
                    <img src="/images/distortion.svg" />
                </a>
            </Link>
        </div>
    )
}

export default Logo