import React from 'react'

import styles from './ui.module.css';

function Container({className, children}) {
  return (
    <section className={`full-width ${styles.sectioncontainer} ${className}`}>
       {children}
    </section>
  )
}

export default Container