// pages/work.js
import React from 'react';
import styles from './work.module.css';
import Image from 'next/image'
const work = () => {
    return (
      <div className={styles.topSection}>
      <div className={styles.box}>
      <div className={styles.img2}>
        <Image 
      src="/list.png"
      width={400}
      height={700}
      alt="Picture of the author"
    />
    </div>
      <h2 className={styles.h2spacing1}>Work with us</h2>
      <div className={styles.subtopSection1}>
      <div className={styles.subbox1}>
        <h2 className={styles.h2subspacing}> About</h2>
        <p className={styles.pspacing1}> At ahead our goal is to make self-improvement fun and lasting. 
          We know there is a way how to make it work. And that is what ahead is all about!</p>
          <div className={styles.subtopSection2}>
      <div className={styles.subbox2}>
        <h2 className={styles.h2subspacing}>Product</h2>
        <p className={styles.pspacing2}>Sure! you could spend ages reading books or sitting in seminars on how to 
          become a better spouse, parent, or manager - like we did...
        </p>
        </div>
      </div>
        </div>
      </div>
      </div>

      <div>
        <h2 className={styles.h2spacing}>Open vacancies</h2>
        <div className={styles.box1}>
        <h4>Senior Full-Stack Engineer</h4>
        <ul>
          <li>Full-time position</li>
          <li>Berlin or remote</li>
          <li>$50-60k, 0.5-1.50% equity share options</li>
        </ul>
        </div>
        <div className={styles.box2}>
        <h4>Senior Designer</h4>
        <ul>
          <li>Full-time position</li>
          <li>Berlin or remote</li>
          <li>$40-55k, 0.25-0.50% equity share options</li>
        </ul>
        </div>
        <div className={styles.box3}>
        <h4>Superstar Intern</h4>
        <ul>
          <li>Full-time position</li>
          <li>Berlin or remote</li>
          <li>$20-24k, 0.5-1.50% equity share options</li>
        </ul>
        </div> 
      </div>
      <div> <hr className={styles.line}/></div>
      <div className={styles.img}>
        <Image 
      src="/img5.png"
      width={700}
      height={400}
      alt="Picture of the author"
    />
    </div>
      </div>
    );
  };
  
  export default work;
  