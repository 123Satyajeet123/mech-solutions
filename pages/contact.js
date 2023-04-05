import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from "../styles/Contact.module.css"
export default function contact() {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
            <h1>Contact us</h1>
        </div>
        <Footer/>
    </>
  )
}
