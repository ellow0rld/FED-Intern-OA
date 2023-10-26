// pages/emotions.js
import styles from './emotions.module.css';

const Emotions = () => {
    return (
      <div>
        <h2 className={styles.head}>EQ beats IQ</h2>
        <div>
            <p className={styles.body1}> People with high emotional intelligence (EQ) live more fulfilled
                lives. They tend to be happier and have healthier relationships.
            </p>
            <p className={styles.body2}> They are more successful in their pursuits and make for inspiring
                leaders. According to science, they earn $29k a year.
            </p>
        </div>
        <div>
            <h1 className={styles.head2}>Does this sound familiar...</h1>
        </div>
        <div>
    <div className={styles.box1}>
        <h4>You argue with a colleague</h4>
        <p>You get angry and defensive, instead of staying open and working towards common ground.</p>
        </div>
        <div className={styles.box2}>
        <h4>You get a promotion at work</h4>
        <p>You question yourself and wonder when they will realize you are an unqualified imposter, instead of trusting
            yourselves and your abilities.
        </p>
        </div>
        <div className={styles.box3}>
        <h4>You attend a class reunion</h4>
        <p>You compare yourself with your friends life experience and their achievements, fostering a sense of independence from external judgments.</p>
        </div>
        <div className={styles.box4}>
        <h4>Quarrel with your partner</h4>
        <p>Accusing them of doing that thing you dislike, such as saying, &apos; You always do that &apos;, instead of remaining calm and addressing their concerns.</p>
        </div>
        </div>
      </div>    
    );
  };
  
  export default Emotions;