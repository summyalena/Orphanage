"use client";

import { heading } from "@/utils/datas";
import datas from "@/utils/datas";
import React, {useState, useEffect} from "react";
import styles from "./dashboard.module.css";
import Container from '@/ui/Container';
import Actions from './Actions';
import Form from '@/ui/Form'

function Table({data}) {
  const [openmodal, setopenModal] = useState(false);


  return (
    <Container className={`full-width ${styles.transactiontable}`}>
     <Actions openmodal={openmodal} setopenModal={setopenModal}/>
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
          {data.length === 0 && <p>You have no orphans yet</p>}
          {data.length > 0 &&
            data.map((el) => (
              <tr className={`grid ${styles.tabledata}`} key={el.id}>
                <td className={styles.name}>
                  <input type='checkbox'/>
                  {el.name}</td>
                <td>{el.sex}</td>
                <td>{el.dob}</td>
                <td>{el.state}</td>
                <td>{el.lga}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      {openmodal ? <Form setopenModal={setopenModal}/> : ''}
    </Container>
  );
}

export default Table;
