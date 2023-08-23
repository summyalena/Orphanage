"use client";
import React, { useState} from "react";

import Image from "next/image";
import Button from '@/ui/Button';

import Gridtemplate from "@/ui/Gridtemplate";
import Container from "@/ui/Container";
import styles from "./donate.module.css";
import donate from '@/utils/donate';
import Modal from '@/ui/Modal';
import AccountModal from '@/ui/AccountModal';
import Imagefive from "../../../public/assests/images/inkindonation.svg";
import { useRouter } from 'next/navigation';
import InKindModal from '@/ui/InkindModal';

function DonateContent() {
  const [openmodal, setOpenModal] = useState(false);
  const [openAcctModal, setOpenAcctModal] = useState(false);
  const [openInkindModal, setOpenInkindModal] = useState(false);

  const handleModalClick = () => {
    setOpenModal(!openmodal)
    console.log("yellow");
  };

  const handleOpenInkindModal = () => {
    setOpenInkindModal(true);
  }

  const removeClick = () => {
    setOpenModal(false);
  }

  return (
    <Container className={styles.donatecontainer}>
      <Gridtemplate className={styles.donategrid}>
        {donate.map((el) => (
          <div
          key={el.id}
            className={`flex flex-col center gap-md ${styles.card}`}
          >
            <Image src={el.image} alt={el.heading} />
            <div className="gap-sm flex flex-col center">
              <h5>{el.heading}</h5>
              <p>{el.message}</p>
              <Button type="button" onClick={handleModalClick}>
                Donate now
              </Button>
            </div>
            {openmodal ? <Modal openmodal={openmodal} setOpenModal={setOpenModal} removeClick={removeClick} setOpenAcctDetails={setOpenAcctModal}/> : ''}
            {openAcctModal ? <AccountModal 
            setOpenModal={setOpenModal}setOpenAcctDetails={setOpenAcctModal}/>: ''}
          </div>
        ))}
         <div className={`flex flex-col center gap-md  ${styles.inkind}`}>
            <Image src={Imagefive} alt="in_kind icon" />
            <div className="gap-sm flex flex-col center">
              <h5>IN-KIND DONATION</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis iusto pariatur illum, est.</p>
              <Button type="button" onClick={ handleOpenInkindModal}>
                Donate now
              </Button>
            </div>
            </div>
            {openInkindModal ? <InKindModal setInkindModal={setOpenInkindModal}/> : ''}
      </Gridtemplate>
    </Container>
  );
}

export default DonateContent;
