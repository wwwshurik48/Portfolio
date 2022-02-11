import React from 'react';
import styles from './Works.module.css'

const Works = (props) => {
    return (
        <div className={styles.works}>
            <div className={styles.avaContainer}>
                <button className={styles.button}>Watch</button>
            </div>

            <div className={styles.project}>
                <h3>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}

export default Works;
