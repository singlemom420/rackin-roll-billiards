import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <section className={styles.hero}>
        <h2>About Rackin Roll Billiards</h2>
        <p>
          Rackin Roll Billiards was built around a simple idea: every pool table deserves
          professional treatment—whether it lives in a neighborhood bar or the center of a
          million-dollar game room.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={styles.block}>
          <h3>Precision first</h3>
          <p>
            We take time with each table: inspecting the frame, tightening hardware, leveling the
            slate, and stretching the cloth so you get a clean, consistent roll across every inch of
            the surface.
          </p>
        </div>
        <div className={styles.block}>
          <h3>Respect for your space</h3>
          <p>
            From boots to blankets, we protect your home as carefully as we protect your table.
            Floors, walls, and doorways are all padded and guarded during each move.
          </p>
        </div>
        <div className={styles.block}>
          <h3>Local, reliable, and insured</h3>
          <p>
            We show up when we say we will, with the crew, tools, and experience to get the job
            done right the first time. Fully insured, and fully committed to your table.
          </p>
        </div>
      </section>
    </Layout>
  );
}
