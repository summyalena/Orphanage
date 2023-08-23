'use client';

import React, { useState, useEffect } from 'react';
import Card from './Card';

import Imageone from '../../public/assests/images/monetary.svg';
import Button from './Button';
import styles from './ui.module.css';
import Image from 'next/image';
import badsign from '../../public/assests/icons/badsign.svg';
import backsign from '../../public/assests/icons/modalback.svg';

function Modal({ setOpenModal }) {
  const [values, setValues] = useState({
    amount: '',
    full_name: '',
    email: '',
    phone_number: '',
  });
  const [donate, setDonate] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:4000/api/donators', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (data.status === 201) setOpenModal(false);
  };

  useEffect(() => {
    if (
      values.amount &&
      values.full_name &&
      values.email &&
      values.phone_number
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [values]);

  return (
    <div className={styles.modalcontainer}>
      <div className="flex flex-col align-y">
        <div className={`full-width flex align-y ${styles.modalHeader}`}>
          {donate && (
            <Image
              onClick={() => {
                setDonate(false);
                setValues({
                  amount: '',
                  full_name: '',
                  email: '',
                  phone_number: '',
                });
              }}
              src={backsign}
              alt="backsign"
            />
          )}

          <Image
            onClick={() => setOpenModal(false)}
            src={badsign}
            alt="badsign"
            className={styles.close}
          />
        </div>

        <Card
          image={<Image src={Imageone} alt="" />}
          text="MONETARY DONATION"
          message="Lorem ipsum dolor sit amet consectetur. Neque magna augue et ligula penatibus at sed morbi donec. Etiam"
          className={`full-width ${styles.modalcard}`}
        />

        {!donate && (
          <>
            <Button>Give money</Button>

            <form
              className={`full-width ${styles.form}`}
              onSubmit={(e) => {
                e.preventDefault();

                setDonate(!donate);
              }}
            >
              <div className={`full-width flex`}>
                <span className="flex center">NGN</span>
                <input
                  placeholder="Enter the amount in naira"
                  type="number"
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, amount: e.target.value }))
                  }
                  className={`full-width`}
                />
              </div>

              <div className={`full-width flex flex-col`}>
                <label>Full Name</label>
                <input
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      full_name: e.target.value,
                    }))
                  }
                  type="text"
                />
              </div>

              <div className={`full-width flex flex-col`}>
                <label>Email</label>
                <input
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="text"
                />
              </div>

              <div className={`full-width flex flex-col`}>
                <label>Phone Number</label>
                <input
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      phone_number: e.target.value,
                    }))
                  }
                  type="number"
                />
              </div>

              <Button type="submit" disabled={disabled}>
                Donate now
              </Button>
            </form>
          </>
        )}

        {donate && (
          <>
            <h2>Please make a transfer to account details below</h2>

            <ul className="flex flex-col gap ">
              <li>
                Account Name: <span>Orphanage Home</span>
              </li>
              <li>
                Account Number: <span>245368889922</span>
              </li>
              <li>
                Bank Name: <span>Bank Home</span>
              </li>
              <li>
                Amount: <span>{values.amount}</span>
              </li>
            </ul>

            <Button className={styles.paid} onClick={handleSubmit}>
              I've sent the money!
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
