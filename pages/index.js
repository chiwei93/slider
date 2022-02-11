import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Header from '../components/header/header';
import Container from '../components/container/container';

import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  // for navigating to the next page when the page is clicked
  const onPageClick = () => {
    router.push('/terms');
  };

  return (
    <Container background="/images/home.png" onClick={onPageClick}>
      <Header />

      <div className={styles.content}>
        <div className={styles.headline}>
          <Image src="/images/title.png" alt="headline" layout="fill" />
        </div>

        <p className={`${styles.subHeading} ${styles.textBold}`}>
          Any transaction
          <br />
          with Atome
          <br />
          entitle One(1)
          <br />
          play.
        </p>

        <div className={styles.btnContainer}>
          <Link href="/terms">
            <a className={`${styles.btnStart} ${styles.textBold}`}>
              TAP to START
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.downloadContainer}>
        <div className={styles.qrCodeContainer}>
          <Image src='/images/qr.png' alt='qr code' layout='fill' />
        </div>
      </div>
    </Container>
  );
}
