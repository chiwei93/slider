import { useRouter } from 'next/router';
import Link from 'next/link';

import prizeData from '../../utils/prizes';

import styles from '../../styles/Prize.module.css';

const Prize = () => {
  const router = useRouter();
  const { id } = router.query;

	// if the page is reloaded
  if (!id) {
    return (
      <div
        className={styles.container}
        style={{ backgroundImage: `url('/images/dashed.png')` }}
      ></div>
    );
  }

  // for getting the background url
  const background = () => {
    const prize = prizeData.find(prize => prize.id === parseFloat(id));

    return prize.url;
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background()})` }}
    >
      <div className={styles.btnContainer}>
        <Link href="/">
          <a className={styles.btn}>RESTART</a>
        </Link>
      </div>
    </div>
  );
};

export default Prize;
