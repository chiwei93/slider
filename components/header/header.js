import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
