import Image from 'next/image'
import styles from './about.module.css'


export const metadata = {
  title: 'About Page',
  description: 'About Page Description',
}

const AboutPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better. </h1>
          <p className={styles.desc}>Our team of experts are always ready to take on your next project.
            We are a full-service digital agency that is ready to help you with your next project.
            We are a team of experts that are ready to take on your next project.
            We are a full-service digital agency that is ready to help you with your next project.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of experience</p>
            </div>
            
            


          </div>
        </div>
        <div className={styles.imgContainer}>
          < Image src="/about.png"
          alt='about'
          fill
          className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage