'use client';

import React from 'react'
import Image from 'next/image';

import styles from './dashboard.module.css';
import plus from '../../../public/assests/icons/plus.svg';


function Actions({setopenModal}) {

 const handleClick =()=> {
    setopenModal(true)
  }
  return (
    <button onClick={handleClick} className={`${styles.actions}`}>
       <Image width={20} height={20} src={plus} alt="plus"/> Add
    </button>
  )
}

export default Actions