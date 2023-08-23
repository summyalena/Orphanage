'use client';

import React, { useState } from 'react';
import Card from './Card';

import Imageone from '../../public/assests/images/monetary.svg';
import Button from './Button';
import styles from './ui.module.css';
import Image from 'next/image';
import badsign from '../../public/assests/icons/badsign.svg';

function InKindModal({ setopenModal }) {
  const [values, setValues] = useState({
    name: '',
    sex: '',
    dob: '',
    state: '',
    lga: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://orphanagehome.onrender.com/api/orphans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.status === 201) setopenModal(false);
  };

  return (
    <div className={styles.modalcontainer}>
      <div className="flex flex-col gap-sm">
        <Image
          width={40}
          height={40}
          onClick={() => setopenModal(false)}
          src={badsign}
          alt="badsign"
        />
        <p className='flex center'>Add children</p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className={`full-width flex flex-col align-x gap-md ${styles.form}`}
        >
          <label>Full Name</label>
          <input
            name="name"
            type="text"
            onChange={(e) =>
              setValues({ ...values, full_name: e.target.value })
            }
          />
          <label>SEX</label>
          <input
            name="sex"
            type="text"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />

          <label>DOB</label>
          <input
            name="dob"
            type="text"
            onChange={(e) =>
              setValues({ ...values, phone_number: e.target.value })
            }
          />
            <label>State</label>
          <input
            name="state"
            type="text"
            onChange={(e) => setValues({ ...values, kind: e.target.value })}
          />
          <label>LGA</label>
          <input
            name="lga"
            type="text"
            onChange={(e) => setValues({ ...values, kind: e.target.value })}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default InKindModal;
