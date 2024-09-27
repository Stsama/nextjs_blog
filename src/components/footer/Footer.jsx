import styles from './footer.module.css';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ezoulson</div>
      <div className={styles.text}>
        <p>© 2024 Ezoulson. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer