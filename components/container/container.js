import styles from './container.module.css';

const Container = ({
  children,
  background = '/images/dashed.png',
  onClick,
}) => {
  return (
    <section
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
      onClick={onClick}
    >
      {children}
    </section>
  );
};

export default Container;
