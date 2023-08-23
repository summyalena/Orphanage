'use client';

import { heading } from '@/utils/datas';
import datas from '@/utils/datas';
import React from 'react';
import styles from './dashboard.module.css';
import Container from '@/ui/Container';
import Transactions from './Transactions';
import donations, { donationheading } from '@/utils/donations';

function TransactionTable({ data }) {
  return (
    <Container className={`full-width ${styles.transactiontable}`}>
      <Transactions />
      <div>
        <p>Donation</p>
        <table className="grid full-width">
          <thead className={styles.tableheading}>
            {donationheading.map((el) => (
              <tr key={el.id} className={`${styles.head}`}>
                <th>{el.name}</th>
              </tr>
            ))}
          </thead>

          <tbody>
            {data.length === 0 && <p>You have no donator yet</p>}
            {data.length > 0 &&
              data.map((donator) => (
                <tr className={`grid ${styles.tabledata}`} key={donator._id}>
                  <td className={styles.group}>{donator.full_name}</td>
                  <td>{donator.phone_number}</td>
                  {donator.amount && <td>Monetary</td>}
                  {donator.kind && <td>In-kind donation</td>}

                  {donator.amount && <td>{donator.amount}</td>}
                  {donator.kind && <td>{donator.kind}</td>}

                  <td>{donator.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default TransactionTable;
