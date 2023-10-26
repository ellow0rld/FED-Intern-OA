// pages/manifesto.js
import React from 'react';
import Image from 'next/image'
import styles from './manifesto.module.css';
const manifesto = () => {
    return (
      <div className={styles.topSection}>
      <div className={styles.box}>
      <p className={styles.pspacing}>Built out of frustration</p>
      <h2 className={styles.h2spacing}> Meet the ahead app</h2>
      <div className={styles.paraspacing}>
      <p> A personalized pocket coach that provides bite-</p>
      <p> sized, science-driven tools to boost emotional</p>
      <p> intelligence.</p>
      <p>Think of it as a pocket cheerleader towards a</p>
      <p> better, more fulfilling.</p>
      </div>
      <div className={styles.img}>
        <Image 
      src="/img2.png"
      width={450}
      height={320}
      alt="Picture of the author"
    />
    </div>
      </div>
      <div className={styles.paraspacing2}>
        <p> Wrong with self-improvement & how we are fixing it.</p>
        <h1>Self-improvement.  Ugh.</h1>
        <div>
          <ul>
            <li> 
              <h2>It is not as easy as 1-2-3</h2>
              <p> The journey of change may be long, but our sessions are quick ,We get</p>
              <p> to the point and tell you what you want to know (and nothing else).</p>
            </li>
            <li> 
              <h2>Old habits are hard to break</h2>
              <p> And bad behaviours die hard. Fortunately, we get you great, science-</p>
              <p>backed techniques to use.</p>
            </li>
            <li> 
              <h2>You and your motivation dont have a long-term relationship.</h2>
              <p>Luckily, we can proactively prepare you for the marathon, not just the</p>
              <p>race. Effective, memorable exercises will help you stick to your goals.</p>
            </li>
          </ul>
        </div>
        <div>
        <h2 className={styles.head}>Be the best you with EQ</h2>
        <div>
            <p className={styles.body1}> Not having your own emotions under control might be holding you back
            </p>
            <p className={styles.body2}> Additionally, not understanding those of others stops you from being parent,
            friend you can be.
            </p>
            </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default manifesto;
  