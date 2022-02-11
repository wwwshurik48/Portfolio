import React from 'react';
import styles from './Main.module.css'
import stylesComtainer from '../common/styles/Container.module.css'
import bart from './../common/image/bart.png'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesComtainer.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am Alexander Perov</h1>
                    <p>I am Front-end Developer</p>
                </div>
                <div className={styles.photo}>
                    <img src={bart} alt="photo"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
