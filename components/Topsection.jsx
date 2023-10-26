import React from 'react';
import styles from './section1.module.css';
import Image from 'next/image'
import Mycomp from '../components/Mycomp';

const Topsection = () => {
  return (
    <div className={styles.topSection}>
      <div className={styles.box}>
            <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        <p className={styles.pspacing}>Ahead app</p>
        <h1 className={styles.h1spacing}>Master your life</h1>
        <h1 className={styles.h1spacing}>by mastering</h1>
        <h1 className={styles.h1spacing}>emotions</h1>
        <div className={styles.buttons}>
        <div className={styles.rev}>
        <Image 
      src="/rev.png"
      width={300}
      height={70}
      alt="Picture of the author"
    />
    </div>
        <div className={styles.img}>
        <Image 
      src="/img.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
      </div>
    </div>
    </div>
  );
};

export default Topsection;