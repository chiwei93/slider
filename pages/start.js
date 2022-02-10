import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';

import prizesData from '../utils/prizes';

import styles from '../styles/Start.module.css';

const Start = () => {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(1);
  const [prizes, setPrizes] = useState([...prizesData]);
  const [slowDown, setSlowDown] = useState(false);

  // time for the sliding animation for each slide
  const slidingTimeForSlide = useRef(100);

  // time for slow down time for each slide
  const slowDownSlidingTimeForSlide = useRef(250);

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

    router.push(`/prizes/${id}`);
  }, [router]);

  // for setting an interval to increase the currentSlide every 200ms
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevState => {
        return prevState + 1;
      });
    }, slidingTimeForSlide.current);

    let newInterval;

    const timeout = setTimeout(() => {
      clearInterval(interval);

      newInterval = setInterval(() => {
        setCurrentSlide(prevState => {
          return prevState + 1;
        });
      }, slowDownSlidingTimeForSlide.current);
    }, 3500);

    // clear interval and reset the state when the component unmounts
    return () => {
      clearInterval(newInterval);
      clearTimeout(timeout);
      reset();
    };
  }, []);

  // for adding slides when the currentSlide changes
  useEffect(() => {
    // after the animation exceed or equal to the total animation time specified, navigate to a random prize page
    if (currentSlide >= totalAnimationTime / slidingTimeForSlide.current) {
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
    setSlowDown(false);
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
            transition: `transform ${
              slowDown
                ? slowDownSlidingTimeForSlide.current
                : slidingTimeForSlide.current
            }ms`,
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
