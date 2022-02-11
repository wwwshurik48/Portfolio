import React from 'react';
import styles from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <img className={styles.icon}
                 src={props.icon}/>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
}

export default Skill;
