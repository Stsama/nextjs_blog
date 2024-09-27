"use client";
import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {


  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}> We are a creative agency that specializes in creating beautiful and engaging websites.
         We are passionate about design and technology and strive to create the best user experience possible.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt='brand' fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt='hero' fill className={styles.heroImage} unoptimized />
    </div>
  </div>
  
};


export default Home;



