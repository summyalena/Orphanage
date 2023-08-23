import React from 'react';
import Card from './Card';
import { useRouter } from 'next/navigation';

import Imageone from '../../public/assests/images/monetary.svg';
import Button from './Button';
import styles from './ui.module.css';
import Image from 'next/image';
import badsign from '../../public/assests/icons/badsign.svg';
import backsign from '../../public/assests/icons/modalback.svg';

function AccountModal({ setOpenModal, setOpenAcctDetails }) {
  const router = useRouter();

  const openPrevModal = () => {
    setOpenAcctDetails(false);
    setOpenModal(true);
  };

  const handleRouteHome = () => {
    setOpenAcctDetails(false);
    router.push('/donate');
  };

  return (
    <div className={styles.modalcontainer}>
      <div className={`flex flex-col gap-sm ${styles.acctwrapper}`}>
        <span className={`flex full-width ${styles.acctheading}`}>
          <Image onClick={openPrevModal} src={backsign} alt="backsign" />
          <Image onClick={handleRouteHome} src={badsign} alt="badsign" />
        </span>
        <Card
          image={<Image src={Imageone} alt="" />}
          text="MONETARY"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam"
          className={styles.modalcard}
        />

        
        <h2>Please make a transfer to the account</h2>
        <ul className="flex flex-col gap-sm ">
          <li>
            <p>Account Name:</p> <p>Orphanage Home</p>{' '}
          </li>
          <li>
            <p>Account Number:</p> <p>245368889922</p>{' '}
          </li>
          <li>
            <p>Bank Name:</p> <p>Bank Home</p>{' '}
          </li>
          <li>
            <p>Amount:</p> <p>10000</p>{' '}
          </li>
        </ul>
        <Button onClick={handleRouteHome}>I've sent the money!</Button>
      </div>
    </div>
  );
}

export default AccountModal;
