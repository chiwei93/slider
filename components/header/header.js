import Image from 'next/image';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/images/logo.png" alt="logo" layout="fill" />
        {/* <img src="/images/logo.png" alt="logo" /> */}
      </div>
    </header>
  );
};

export default Header;
