import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/header/header';
import Container from '../components/container/container';

import styles from '../styles/Game.module.css';

const Game = () => {
  return (
    <Container>
      <Header />

      <div className={styles.container}>
        <div className={styles.image}>
          <Image src="/images/wheel.png" alt="wheel" layout="fill" />
        </div>

        <p className={styles.heading}>Are you ready?</p>
        <p className={styles.subHeading}>(There&apos;s no turning back)</p>

        <div className={styles.btnContainer}>
          <Link href="/start">
            <a className={styles.link}>
              <Image src="/images/play.png" alt="play button" layout='fill' />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Game;
