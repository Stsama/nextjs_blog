

import Image from 'next/image'
import styles from './contact.module.css'
// import HydrationTest from '@/components/HydrationTest'
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';

// Dynamic import with no SSR (Server Side Rendering)
// const HydrationTestNoSSR = dynamic(() => import('@/components/HydrationTest'), {ssr: false});

export const metadata = {
  title: 'Contact Page',
  description: 'This is the contact page of the Next Blog App',
}

const ContactPage = () => {
  // const a = Math.random()

  // console.log(a)

  // console.log("let's check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div className="" suppressHydrationWarning>{a} </div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Phone Number (Optional)' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage