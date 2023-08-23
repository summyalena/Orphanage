import React from 'react';

import Image from 'next/image';

import Container from '@/ui/Container';
import imageone from '../../../public/assests/images/Rectangle62.svg'
import imagethree from '../../../public/assests/images/image1.svg';
import imagetwo from '../../../public/assests/images/Rectangle6.svg';
import Gridtemplate from '@/ui/Gridtemplate';
import Button from '@/ui/Button';
import styles from './about.module.css';
import AboutStaff from './AboutStaff';

function AboutSection() {
  return (
    <Container>
      <Gridtemplate className={styles.sectiongrid}>
        <div>
          <h2>OUR STORY</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam necessitatibus quaerat. Optio quod iste saepe obcaecati ipsam blanditiis cumque voluptatum quasi delectus molestias, ea placeat aliquam ex tenetur culpa!</p>
          <Button>Learn more</Button>
        </div>
          <Image className={styles.secimage} src={imageone} alt=""/>
      </Gridtemplate>
      <Gridtemplate className={styles.sectiongrid}>
          <Image className={styles.secimage} src={imagetwo} alt=""/>
        <div>
          <h2>Infants</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam necessitatibus quaerat. Optio quod iste</p>
          <Button>Learn more</Button>
        </div>
      </Gridtemplate>
      <Gridtemplate className={styles.sectiongrid}>
        <div>
          <h2>Financials</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam
          </p>
          <Button>Learn more</Button>
        </div>
        <div>
          <Image className={styles.secimage} src={imagethree} alt=""/>
        </div>
      </Gridtemplate>
      <AboutStaff/>
    </Container>
  )
}

export default AboutSection