'use client';

import React, { useState } from 'react';
import Card from './Card';

import Imageone from '../../public/assests/images/monetary.svg';
import Button from './Button';
import styles from './ui.module.css';
import Image from 'next/image';
import badsign from '../../public/assests/icons/badsign.svg';

function InKindModal({ setInkindModal }) {
  const [values, setValues] = useState({
    full_name: '',
    phone_number: '',
    email: '',
    kind: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/donators', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.status === 201) setInkindModal(false);
  };

  return (
    <div className={styles.modalcontainer}>
      <div className="flex flex-col gap-sm">
        <Image
          width={40}
          height={40}
          onClick={() => setInkindModal(false)}
          src={badsign}
          alt="badsign"
        />
        <Card
          image={<Image src={Imageone} alt="" />}
          text="IN-KIND DONATION"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et"
          className={styles.ikmodalcard}
        />
        <p>What would you like to give us</p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className={`full-width flex flex-col align-x gap-md ${styles.form}`}
        >
          <label>Full Name</label>
          <input
            name="fullName"
            type="text"
            onChange={(e) =>
              setValues({ ...values, full_name: e.target.value })
            }
          />
          <label>Email</label>
          <input
            name="Email"
            type="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />

          <label>Phone Number</label>
          <input
            name="Phone Number"
            type="number"
            onChange={(e) =>
              setValues({ ...values, phone_number: e.target.value })
            }
          />
          <label>What would you like to give us?</label>
          <input
            name="Kind"
            type="text"
            onChange={(e) => setValues({ ...values, kind: e.target.value })}
          />
          <Button type="submit">Contact us</Button>
        </form>
      </div>
    </div>
  );
}

export default InKindModal;
