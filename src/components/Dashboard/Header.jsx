'use client'

import Link from 'next/link'
import React from 'react';

import styles from './dashboard.module.css'

function Header() {
  return (
    <header className={`flex full-width  ${styles.dashboardheader}`}>
    <h1>LOGO</h1>
    <Link href="/">Logout</Link>
    </header>
  )
}

export default Header