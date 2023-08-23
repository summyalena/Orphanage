'use client';

import React from 'react'

import styles from '../dashboard.module.css'

function NoTabContent() {
  return (
    <div className={`flex center ${styles.notab}`}>
      <p>No content</p>
    </div>
  )
}

export default NoTabContent