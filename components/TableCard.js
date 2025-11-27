import styles from '../styles/Sell.module.css';

export default function TableCard({ table }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3>{table.name}</h3>
          {table.brand && <span className={styles.chip}>{table.brand}</span>}
        </div>
        <ul className={styles.meta}>
          {table.size && (
            <li>
              <strong>Size:</strong> {table.size}
            </li>
          )}
          {table.condition && (
            <li>
              <strong>Condition:</strong> {table.condition}
            </li>
          )}
          {table.location && (
            <li>
              <strong>Location:</strong> {table.location}
            </li>
          )}
        </ul>
        {typeof table.price === 'number' && (
          <p className={styles.price}>
            ${table.price.toLocaleString(undefined, { minimumFractionDigits: 0 })}
          </p>
        )}
        <p className={styles.ctaNote}>
          Contact us for delivery, professional setup, and precision leveling.
        </p>
      </div>
    </article>
  );
}
