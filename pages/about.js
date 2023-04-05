import React from 'react'
import Navbar from '@/components/Navbar'
import styles from "../styles/About.module.css"
import Footer from '@/components/Footer'
export default function about() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1>ABOUT US</h1>
                <p>We are a group of extremely passionate full time enthusiast who wants to provide all sorts of engineering services and help people understand really tough/ interesting concepts effortlessly</p>
            </div>
            <Footer/>
        </>
    )
}
