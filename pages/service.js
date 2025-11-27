import Layout from '../components/Layout';
import styles from '../styles/Service.module.css';

export default function Service() {
  return (
    <Layout>
      <section className={styles.hero}>
        <h2>Services</h2>
        <p>
          From bar rooms to penthouse game rooms, Rackin Roll Billiards handles every step of your
          table&apos;s life: moving, rebuilding, refelting, and leveling.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.block}>
          <h3>Moving & Relocation</h3>
          <p>
            Full breakdown, transport, and rebuild. We protect your slate, rails, and pockets, and
            pad doorways and floors so your home stays as pristine as your table.
          </p>
        </article>

        <article className={styles.block}>
          <h3>Refelt & Cloth Upgrades</h3>
          <p>
            New cloth installs with clean seams and a tight, even stretch. Standard green, bar-room
            blues, or tournament-speed upgrades—we can match the speed you like to play on.
          </p>
        </article>

        <article className={styles.block}>
          <h3>Leveling & Tune-Ups</h3>
          <p>
            We re-level slate with shims and precision tools so the cue ball rolls true from
            cushion to cushion. We also tighten hardware, check frame integrity, and adjust pocket
            openings on request.
          </p>
        </article>

        <article className={styles.block}>
          <h3>Repairs & Restorations</h3>
          <p>
            Loose rails, torn pockets, dead cushions, or wobbly frames—our pool techs can bring a
            tired table back to life and get it ready for years of breaking and banking.
          </p>
        </article>
      </section>
    </Layout>
  );
}
