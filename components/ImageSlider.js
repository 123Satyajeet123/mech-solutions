import React, { useState } from 'react'
import { SLiderData } from './SLiderData'
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const nextSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    };
    return (
        <>

            <section className={styles.slider}>
                <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide} />
                <FaArrowAltCircleRight className={styles.right_arrow} onClick={nextSlide} />
                {SLiderData.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide_active" : "slide"} key={index}>
                            {index === current && <Image src={slide.image} alt="crousel image" width={1200} height={600} />}
                        </div>
                    )
                })}
            </section>
        </>
    )
}
