// pages/self-awareness.js
import React from 'react';
import styles from './test.module.css';
import Image from 'next/image'

const self_awareness = () => {
    return (
      <div className={styles.topSection}>
      <div className={styles.box}>
      <p className={styles.pspacing}>Let your friends, family, and co-workers (anonymously) rate your social skills</p>
      <h2 className={styles.h2spacing}>Ever wondered what other think of you?</h2>
      <div className={styles.img}>
        <Image 
      src="/img3.png"
      width={850}
      height={330}
      alt="Picture of the author"
    />
    </div>
      </div>
      <div>
        <p className={styles.pspacing2}>We take your privacy seriously</p>
        <h2 className={styles.h2spacing2}> Before you get started </h2>
        <div className={styles.img2}>
        <Image 
      src="/img4.png"
      width={700}
      height={300}
      alt="Picture of the author"
    />
    </div>
      </div>
      </div>
    );
  };
  
  export default self_awareness;
  