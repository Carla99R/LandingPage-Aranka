import React from 'react';
import styles from '../styles/Info.module.css'
import logoAranka from "../assets/logoAranka.png";
import splash from "../assets/icons/paint.png";
import {Image} from "antd";
import Icon from '@ant-design/icons';

const Info = () => {


    return (
        <div className={styles.container}>
            <p className={styles.title}>Descubre más Sobre Nosotros</p>
            <div className={styles.todo}>
                <div className={styles.segment}>
                    <div className={styles.logo}>
                        <Image
                            width={'50%'}
                            height={'100%'}
                            preview={false}
                            src={logoAranka}
                        />
                    </div>
                    <div className={styles.text}>
                        <p className={styles.subtitle}>Misión</p>
                        <p className={styles.mision}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                            corporis cumque debitis dolor
                            dolorem doloribus ducimus eum expedita id, modi natus nisi, obcaecati quia quis repellendus
                            tenetur
                            voluptate voluptatem voluptatibus!</p>
                    </div>
                </div>
                <div className={styles.segment}>
                    <div className={styles.text2} style={{width: '70%'}}>
                        <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                            corporis cumque debitis dolor
                            dolorem doloribus ducimus eum expedita id, modi natus nisi, obcaecati quia quis repellendus
                            tenetur
                            voluptate voluptatem voluptatibus!</p>
                        <div className={styles.tips}>
                            <div className={styles.tipsDiv}>
                                <figure className={styles.icon}>
                                    <Image
                                        width={'100%'}
                                        height={'70%'}
                                        preview={false}
                                        src={splash}

                                    />
                                </figure>
                                <div className={styles.tipDiv}>
                                    <p className={styles.tipTitle}>Algún título para este tip</p>
                                    <p className={styles.tipContent}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                        Atque,
                                        corporis cumque debitis dolor</p>
                                </div>

                            </div>
                            <div className={styles.tipsDiv}>
                                <figure className={styles.icon}>
                                    <Image
                                        width={'100%'}
                                        height={'70%'}
                                        preview={false}
                                        src={splash}

                                    />
                                </figure>
                                <div className={styles.tipDiv}>
                                    <p className={styles.tipTitle}>Algún título para este tip</p>
                                    <p className={styles.tipContent}>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                        Atque,
                                        corporis cumque debitis dolor</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div>

                    </div>
                    <div className={styles.text2} style={{width: '70%'}}>
                        <p className={styles.subtitle}>Visión</p>
                        <p className={styles.vision}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                            corporis cumque debitis dolor
                            dolorem doloribus ducimus eum expedita id, modi natus nisi, obcaecati quia quis repellendus
                            tenetur
                            voluptate voluptatem voluptatibus!</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Info;
