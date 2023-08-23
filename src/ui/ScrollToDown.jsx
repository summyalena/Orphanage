import React from 'react';
import Image from 'next/image';

import imageone from '../../public/assests/images/downarrow.svg';

import styles from './ui.module.css';

function ScrollToDown({ className }) {
  const clickToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  
  return (
    <div
      className={`flex flex-col gap-sm center ${styles.scrollbutton} ${className}`}
    >
      <p>Scroll down for more</p>
      <button onClick={clickToDown}>
        <Image src={imageone} alt="left_arrow" />
      </button>
    </div>
  );
}

export default ScrollToDown;
