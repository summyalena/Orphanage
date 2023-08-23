'use client';

import React from 'react';

import styles from './ui.module.css';

function Hero({className, background, content}) {
  return (
    <div className={`full-width flex flex-col center ${styles.hero} ${className}`}>
      <div className={`full-width full-height ${styles.background}`}>
     {background}
     </div>
     <div className={styles.content}>
     {content}
     </div>
    </div>
  )
}

export default Hero