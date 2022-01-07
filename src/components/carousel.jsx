import React, {useEffect, useReducer, useRef, useState} from "react";
import {Carousel, Image} from 'antd';
import styles from '../styles/Carousel.module.css'
import carousel1 from '../assets/carouselImages/carousel1.jpg'
import carousel2 from '../assets/carouselImages/carousel2.jpg'
import carousel3 from '../assets/carouselImages/carousel3.jpg'

const Carrusel = () => {

    return (
        <div style={{height: '100%', backgroundColor: 'black', width: "100%"}}>
            <Carousel autoplay>
                <div>
                    <Image
                        width={'100vw'}
                        height={'70vh'}
                        src={carousel1}
                        className={styles.contentStyle}
                    />
                </div>
                <div>
                    <Image
                        width={'100vw'}
                        height={'70vh'}
                        src={carousel2}
                        className={styles.contentStyle}
                    /></div>
                <div>
                    <Image
                        width={'100vw'}
                        height={'70vh'}
                        src={carousel3}
                        className={styles.contentStyle}
                    /></div>
            </Carousel>
        </div>

    );
}
export default Carrusel;


