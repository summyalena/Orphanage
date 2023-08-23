'use client';

import React from 'react'

import Navigation from '@/layouts/Navigation';
import styles from './about.module.css';
import Container from '@/ui/Container';
import ScrollToDown from "@/ui/ScrollToDown";

function HeroAbout() {
  return (
    <div className={`full-width ${styles.herocontainer}`}>
      <Navigation/>
      <Container
        className={`flex flex-col gap-md align-x ${styles.herocontent}`}
      >
        <div>
          <h1>Name of orphanage</h1>
        </div>
        <div className={`full-width flex gap-md ${styles.heroAboutbuttons}`}>
         <p>Some to Adopt, Some to Care, Some to Give</p>
         <ScrollToDown className={styles.scroll} />
        </div>
      </Container>
    </div>
  )
}

export default HeroAbout