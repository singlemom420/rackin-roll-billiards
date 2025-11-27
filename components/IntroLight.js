import styles from '../styles/IntroLight.module.css';

export default function IntroNeon() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.copy}>
        <h2>Your table, leveled and ready to break.</h2>
        <p>
          Pool techs who treat every table like it’s the center of the room. Moving, refelts,
          repairs, leveling, and curated new and pre-owned tables to a worthy finish.
        </p>
      </div>
    </section>
  );
}