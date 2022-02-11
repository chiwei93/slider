import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import prizeData from '../../utils/prizes';

import styles from '../../styles/Prize.module.css';

const Prize = () => {
  const router = useRouter();
  const { id } = router.query;

  const transitionTime = 400;

  // ref for the container for the css transition group
  const divElement = useRef(null);

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
    <div className={styles.outerContainer}>
      <CSSTransition
        in={true}
        timeout={transitionTime}
        nodeRef={divElement}
        classNames="slide"
        appear
      >
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(${background()})`,
            transition: `transform ${transitionTime}ms`,
          }}
          ref={divElement}
        >
          <div className={styles.btnContainer}>
            <Link href="/">
              <a className={styles.btn}>RESTART</a>
            </Link>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Prize;
