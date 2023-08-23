"use client";

import { heading } from "@/utils/datas";
import datas from "@/utils/datas";
import React from "react";
import styles from "./dashboard.module.css";
import Container from '@/ui/Container';
import Actions from './Actions';

function Table() {
  return (
    <Container className={`full-width ${styles.transactiontable}`}>
      <Actions/>
      <div>
      <p>Children</p>
      <table className="grid full-width">
        <thead className={styles.tableheading}>
          {heading.map((el) => (
            <tr key={el.id} className={`${styles.head}`}>
              <th>{el.name}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {datas.length > 0 &&
            datas.map((data) => (
              <tr className={`grid ${styles.tabledata}`} key={data.id}>
                <td className={styles.name}>
                  <input type='checkbox'/>
                  {data.Fullname}</td>
                <td>{data.Sex}</td>
                <td>{data.DOB}</td>
                <td>{data.State}</td>
                <td>{data.LGA}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </Container>
  );
}

export default Table;
