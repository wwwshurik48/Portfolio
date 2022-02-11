import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import html from './../common/image/html-1.svg'
import css from './../common/image/css3.svg'
import js from './../common/image/js.svg.png'
import react from './../common/image/react-icon-29.jpg'

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <div className={styles.skillsComponent}>
                        <Skill title={"HTML"}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam tempore vel! Architecto at atque eveniet natus nulla quaerat qui, quo tempore.'}
                               icon={html}/>
                    </div>
                    <div className={styles.skillsComponent}>
                        <Skill title={"CSS"}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam tempore vel! Architecto at atque eveniet natus nulla quaerat qui, quo tempore.'}
                               icon={css}/>
                    </div>
                    <div className={styles.skillsComponent}>
                        <Skill title={"JS"}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam tempore vel! Architecto at atque eveniet natus nulla quaerat qui, quo tempore.'}
                               icon={js}/>
                    </div>
                    <div className={styles.skillsComponent}>
                        <Skill title={"React"}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam tempore vel! Architecto at atque eveniet natus nulla quaerat qui, quo tempore.'}
                               icon={react}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
