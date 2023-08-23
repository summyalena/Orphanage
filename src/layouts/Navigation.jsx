'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './layout.module.css';
import Button from '@/ui/Button';


function Navigation() {
const router = useRouter();
const [mobilemenu, setMobileMenu] = useState(false);

const navigateButton = () => {
  router.push('/');
}

const handleMenu = () => {
  setMobileMenu(!mobilemenu);
  console.log(mobilemenu);
  document.body.classList.toggle('no-scroll');
}

const removeScroll = () => {
  setMobileMenu(false);
  document.body.classList.remove('no-scroll');
}

  const links = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'About',
      link: '/about'
    },
    {
      id: 3,
      name: 'Partnership',
      link: '/donate'
    },
    {
      id: 4,
      name: 'AdminLogin',
      link: '/dashboard'
    }
  ]
  return (
    <header className={`full-width ${styles.navigation}`}>
      <nav className={`full-width flex ${styles.navlinks}`}>
        <Link href='/'>
        LOGO
        </Link>
        <ul className={`flex gap-md ${styles.navlist} ${ mobilemenu ? styles.mobile : ''}`}>
          
        {links.map((link)=> (
          <li key={link.id}>
            <Link onClick={removeScroll} href={link.link}>{link.name}</Link></li>
        ))}
         <Button className={styles.donatebtn} type="button" onClick={removeScroll}>
          <Link href='/donate'>
          Donate now
          </Link>
        </Button>
        </ul>

        <Button className={styles.donatebtn} type="button">
          <Link href='/donate'>
          Donate now
          </Link>
        </Button>
        <button onClick={handleMenu} type="button" className={`flex-col center ${styles.hamburger}`}>
        <span className={styles.line}/>
        <span className={styles.line}/>
        <span className={styles.line}/>
      </button>
       </nav> 
    </header>
  )
}

export default Navigation