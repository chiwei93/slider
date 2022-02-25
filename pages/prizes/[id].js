import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import prizeData from '../../utils/prizes';

import styles from '../../styles/Prize.module.css';

const Prize = () => {
  const router = useRouter();

  // for getting the prize id
  const { id } = router.query;

  useEffect(() => {
    const audio = new Audio('/music/Reveal.wav');

    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // if the page is reloaded
  if (!id) {
    return (
      <div
        className={styles.container}
        style={{ backgroundImage: `url('/images/6ixty/dashed.png')` }}
      ></div>
    );
  }

  // for getting the background url
  const background = () => {
    const prize = prizeData.find(prize => prize.id === parseFloat(id));

    return prize.url;
  };

  return (
    <div className={styles.outerContainer}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${background()})`,
        }}
      >
        <div className={styles.btnContainer}>
          <Link href="/">
            <a className={styles.btn}>GO BACK</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prize;
