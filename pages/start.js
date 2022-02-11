import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import prizesData from '../utils/prizes';
import startPrizes from '../utils/startPrizes';

import styles from '../styles/Start.module.css';

const Start = () => {
  const router = useRouter();

  // for navigating to a random prize page
  const navigateToPrizePage = useCallback(() => {
    // create a distribution array with items of the correct probability
    const distribution = [];

    for (let i = 0; i < prizesData.length; i++) {
      const eachPrizeTotal = Math.floor(prizesData[i].prob * 100);

      for (let j = 0; j < eachPrizeTotal; j++) {
        distribution.push(prizesData[i]);
      }
    }

    const totalPrizes = distribution.length;

    // generate a random index from the distribution array
    const randomIndex = Math.floor(Math.random() * totalPrizes);

    // get the id of the element at that index
    const id = distribution[randomIndex].id;

    router.push(`/prizes/${id}`);
  }, [router]);

  // for setting a timeout to navigate to a random prize when the page is mounted
  useEffect(() => {
    const audio = new Audio('/music/SlotMachines.wav');

    // play audio
    audio.play();

    // listener for replaying audio
    const playSound = () => {
      audio.currentTime = 0;
      audio.play();
    };

    // play audio when first audio ends
    audio.addEventListener('ended', playSound);

    const timeout = setTimeout(() => {
      navigateToPrizePage();
    }, 5800);

    // clear timeout when component is unmounted
    return () => {
      clearTimeout(timeout);
      audio.removeEventListener('ended', playSound);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [navigateToPrizePage]);

  // for skipping the animation
  const onSkipAnimationBtnClick = () => {
    navigateToPrizePage();
  };

  // for rendering the prizes
  const prizesSections = () => {
    return startPrizes.map((prize, index) => {
      return (
        <div
          className={styles.innerContainer}
          style={{
            backgroundImage: `url(${prize.url})`,
          }}
          key={index}
        ></div>
      );
    });
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.slideContainer}>{prizesSections()}</div>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={onSkipAnimationBtnClick}>
          Skip Animation
        </button>
      </div>
    </div>
  );
};

export default Start;
