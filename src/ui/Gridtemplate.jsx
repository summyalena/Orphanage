import React from 'react'

import styles from './ui.module.css';

function Gridtemplate({ children, className }) {
  return (
    <div className={`grid gap-md ${styles.grid} ${className}` }>
      {children}
    </div>
  )
}

export default Gridtemplate;