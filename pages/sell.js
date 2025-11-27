import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { supabase } from '../lib/supabaseClient';
import TableCard from '../components/TableCard';
import styles from '../styles/Sell.module.css';

export default function Sell() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTables() {
      try {
        setLoading(true);
        const { data, error: supaError } = await supabase
          .from('tables')
          .select('*')
          .order('price', { ascending: true });

        if (supaError) throw supaError;

        setTables(data || []);
      } catch (err) {
        console.error(err);
        setError('No tables for sale at this time.');
      } finally {
        setLoading(false);
      }
    }

    loadTables();
  }, []);

  return (
    <Layout>
      <section className={styles.header}>
        <h2>Tables for Sale</h2>
        <p>
          Every table below can be delivered, assembled, and precision-leveled by Rackin Roll
          Billiards. Inventory is managed through Supabase—update your <code>tables</code> table to
          change what appears here.
        </p>
      </section>

      {loading && <p className={styles.status}>Loading tables...</p>}
      {error && !loading && <p className={styles.error}>{error}</p>}

      {!loading && !error && tables.length === 0 && (
        <p className={styles.status}>
          No tables listed yet. Add rows to your <code>tables</code> table in Supabase to display
          your inventory.
        </p>
      )}

      <section className={styles.grid}>
        {tables.map((table) => (
          <TableCard key={table.id} table={table} />
        ))}
      </section>
    </Layout>
  );
}
