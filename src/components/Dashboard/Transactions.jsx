'use client';

import transactions from '@/utils/transactions'
import React from 'react'
import styles from './dashboard.module.css'

function Transactions() {
  return (
    <div className={`gap-sm center ${styles.transactions}`}>
     {
      transactions.map((el)=> (
        <span className='flex flex-col gap-sm'>
          <h2>{el.name}</h2>
          <p>{el.price}</p>
        </span>
      ))
     }
    </div>
  )
}

export default Transactions