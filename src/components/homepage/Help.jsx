"use client";

import React from "react";
import Image from "next/image";

import Container from "@/ui/Container";
import styles from "./homepage.module.css";
import Gridtemplate from "@/ui/Gridtemplate";
import HelpCard from "@/ui/HelpCard";

import Imageone from "../../../public/assests/icons/pray.svg";
import Imagetwo from "../../../public/assests/icons/fundrasiing.svg";
import Imagethree from "../../../public/assests/icons/donation.svg";
import Imagefour from "../../../public/assests/icons/sponsor.svg";
import Button from "@/ui/Button";
import Link from 'next/link';

function Help() {
  return (
    <Container id='help' className={`grid center gap-sm ${styles.helpsection}`}>
      <div id="help">
        <Gridtemplate className={styles.helpgrid}>
          <HelpCard
            className={styles.cardone}
            image={<Image src={Imageone} alt="" />}
            text="PRAY WITH US"
            message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
          />
          <HelpCard
            className={styles.cardtwo}
            image={<Image src={Imagetwo} alt="" />}
            text="FUND RAISING"
            message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
          />
          <HelpCard
            className={styles.cardthree}
            image={<Image src={Imagethree} alt="" />}
            text="DONATION"
            message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
          />
          <HelpCard
            className={styles.cardfour}
            image={<Image src={Imagefour} alt="" />}
            text="SPONSOR A CHILD"
            message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam "
          />
        </Gridtemplate>
      </div>

      <div className={`flex flex-col align-x gap-md ${styles.helptextcard}`}>
        <h5>HOW TO HELP</h5>
        <p>Help us make a difference</p>
        <Button className={styles.donatebtn}><Link href="/donate">Donate Now</Link></Button>
      </div>
    </Container>
  );
}

export default Help;
