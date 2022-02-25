import Image from 'next/image';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/6ixty/logo.png"
          alt="logo"
          layout="fill"
          priority={true}
        />
      </div>
    </header>
  );
};

export default Header;
