import Layout from '../components/Layout';
import IntroNeon from '../components/IntroLight';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <IntroNeon />
      <section className={styles.ctaStrip}>
        <div className={styles.ctaContent}>
          <h2>Need a table moved or leveled?</h2>
          <p>
            Text or call <a href="tel:5555555555">(602) 849 1855</a> for a quick quote. Send a photo
            of your table and we&apos;ll handle the rest.
          </p>
        </div>
      </section>
      <section className={styles.grid}>
        <div className={styles.block}>
          <h2>Pool table moving done right.</h2>
          <p>
            Rackin Roll Billiards specializes in <strong>moving</strong> pool tables. From
            tight staircases to slate-on-slab basements, we know how to break your table down,
            transport it, and build it back up like it just came off the showroom floor.
          </p>
        </div>
        <div className={styles.block}>
          <h2>Full-service pool techs.</h2>
          <ul className={styles.serviceList}>
            <li>
              <strong>Sell:</strong> Curated pre-owned tables ready for a new home.
            </li>
            <li>
              <strong>Repair:</strong> Pocket, rail, and frame repairs to keep every shot clean.
            </li>
            <li>
              <strong>Refelt:</strong> New cloth installs with tight, even stretch.
            </li>
            <li>
              <strong>Level:</strong> Laser-level precision so the roll is always true.
            </li>
            <li>
              <strong>Move:</strong> Disassembly, transport, and reassembly—fully insured.
            </li>
          </ul>
        </div>
      </section>
      
    </Layout>
  );
}
