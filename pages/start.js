import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import prizesData from '../utils/prizes';

import styles from '../styles/Start.module.css';

const Start = () => {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(1);
  const [prizes, setPrizes] = useState([...prizesData]);

  // time for the sliding animation for each slide
  const slidingTimeForSlide = 200;

  // time for the total page sliding animation
  const totalAnimationTime = 5000;

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

    // let result = [
    //   0, 0, 0, 0, 0, 0, 0
    // ];

    // const testDis = [];

    // for (let i = 0; i < prizesData.length; i++) {
    //   const eachPrizeTotal = Math.floor(prizesData[i].prob * 100);

    //   for (let j = 0; j < eachPrizeTotal; j++) {
    //     testDis.push(prizesData[i]);
    //   }
    // }

    // for (let i = 0; i < 1000; i++) {

    //   const testTotal = testDis.length;

    //   // generate a random index from the testDis array
    //   const testIndex = Math.floor(Math.random() * testTotal);

    //   // get the id of the element at that index
    //   const testId = testDis[testIndex].id;

    //   result[testId - 1]++;
    // }

    // console.log(result);

    router.push(`/prizes/${id}`);
  }, [router]);

  // for setting an interval to increase the currentSlide every 200ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevState => {
        return prevState + 1;
      });
    }, 200);

    // clear interval and reset the state when the component unmounts
    return () => {
      clearInterval(interval);
      reset();
    };
  }, []);

  // for adding slides when the currentSlide changes
  useEffect(() => {
    // after the animation exceed or equal to the total animation time specified, navigate to a random prize page
    if (currentSlide >= totalAnimationTime / slidingTimeForSlide) {
      navigateToPrizePage();
    }

    // add the appropriate slide at the end of the array to make it seem infinite
    setPrizes(prevState => {
      const index = currentSlide - 1;
      const copy = [...prevState, prevState[index]];

      return copy;
    });
  }, [currentSlide, router, navigateToPrizePage]);

  // for reseting the state
  const reset = () => {
    setCurrentSlide(1);
    setPrizes([...prizesData]);
  };

  // for skipping the animation
  const onSkipAnimationBtnClick = () => {
    navigateToPrizePage();
  };

  // for rendering the prizes
  const prizesSections = () => {
    return prizes.map((prize, index) => {
      // calculate the translate percent for the y-axis
      const translateYPercent = (index + 1 - currentSlide) * 100;

      return (
        <div
          className={styles.innerContainer}
          style={{
            backgroundImage: `url(${prize.url})`,
            transform: `translateY(${translateYPercent}%)`,
            transition: `transform ${slidingTimeForSlide}ms`,
          }}
          key={index}
        ></div>
      );
    });
  };

  return (
    <div className={styles.outerContainer}>
      {prizesSections()}
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={onSkipAnimationBtnClick}>
          Skip Animation
        </button>
      </div>
    </div>
  );
};

export default Start;
