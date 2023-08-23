'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/ui/Container';
import Gridtemplate from '@/ui/Gridtemplate';
import Button from '@/ui/Button';
import styles from './layout.module.css';
import imageone from '../../public/assests/images/fb.svg'
import imagetwo from '../../public/assests/images/ig.svg'
import imagethree from '../../public/assests/images/twitter.svg'
import imagefour from '../../public/assests/images/yt.svg';


function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.footercontainer}>
        <h5 className='flex center'>
          Join us in making a difference</h5>
        <Gridtemplate className={` ${styles.mainfootgrid}`}>
        <div className='flex flex-col gap-lg align-x'>
        <div className={`grid grid-1 ${styles.footergrid}`}>
          <ul className='flex flex-col gap-md'>
            <h6>Get involved with us</h6>
           <li>The Need</li>
           <li>Our Work</li>
           <li>About Us</li>
           <li>Stories</li>
          </ul>
          <ul className='flex flex-col gap-md'>
          <h6>Get involved with us</h6>
           <li><Link href="/#help">Pray with us</Link></li>
           <li><Link href="/#help">Donate</Link></li>
           <li><Link href="/#help">Sponsor</Link></li>
           <li><Link href="/donate">Fund raise</Link></li>
          </ul>    
        </div>
        <div className={`flex flex-col gap-sm ${styles.lastlist}`}>
        <h6>Get involved with us</h6>
        <ul className='flex gap-sm'>
          <li><Link href="/"><Image src={imageone} alt="fb"/></Link></li>
          <li><a href="/"><Image src={imagethree} alt="twiiter"/></a></li>
          <li><a href="/"><Image src={imagetwo} alt="yt"/></a></li>
          <li><a href='/'><Image src={imagefour} alt="ig"/></a></li>
          </ul>
        </div>
        <p>© Orphan 2023. All rights reserved.</p>
        </div>
        <div className={`${styles.formcontainer}`}>
         <h6>Contact us</h6>
         <form className={`flex flex-col gap-sm ${styles.form}`}>
          <label>First Name</label>
          <input/>
          <label>Last Name</label>
          <input/>
          <label>Email Address</label>
          <input/>
          <label>
            Message
          </label>
          <textarea/>
          <Button className='flex align-x'>Submit</Button>
         </form>
        </div>
        </Gridtemplate>
       
      </Container>
    </div>
  )
}

export default Footer;