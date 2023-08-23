'use client';

import React from 'react'

import Image from 'next/image';

import imageone from '../../../public/assests/images/Rectangle63.svg';
import Gridtemplate from '@/ui/Gridtemplate'
import Button from '@/ui/Button';
import styles from './about.module.css';

function AboutStaff() {
  return (
    <Gridtemplate className={`gap-md ${styles.staffgrid}`}>
    <div className={`grid grid-1 gap-sm ${styles.staffpic}`}>
      <div className='flex flex-col gap-sm'>
        <Image className={styles.staffimage} src={imageone} alt="image of first_name"/>
        <span>
          <h3>Full Name</h3>
          <p>John Doe</p>
        </span>
      </div>
      <div className='flex flex-col gap-sm'>
        <Image className={styles.staffimage} src={imageone} alt="image of second_name"/>
        <span>
          <h3>Full Name</h3>
          <p>John Doe</p>
        </span>
      </div>
    </div>
    <div className='flex flex-col gap-sm align-x'>
       <h3>Staff Board</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae exercitationem quasi dolor, optio voluptatibus nulla facilis iure distinctio vitae facere, odio incidunt aperiam velit dolorum a odit voluptatem mollitia aut.</p>
       <Button>Learn more</Button>
    </div>
    </Gridtemplate>
  )
}

export default AboutStaff