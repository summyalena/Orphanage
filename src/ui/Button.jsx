import React from 'react';

import styles from './ui.module.css'

function Button({children, className, ...restProps}) {
  return (
    <button className={`flex center ${styles.button} ${className}`} {...restProps}>
      {children}
    </button>
  )
}

export default Button