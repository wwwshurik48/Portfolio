import React from 'react';
import styles from './MyWorks.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import Works from "./works/Works";

const MyWorks = () => {
    return (
        <div className={styles.myWorksBlock}>
            <div className={`${stylesContainer.container} ${styles.myWorksContainer}`}>
                <h2 className={styles.title}>My works</h2>
                <div className={styles.works}>
                    <div className={styles.worksComponent}>
                        <Works title={'Todolist'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquamg'}/>
                    </div>
                    <div className={styles.worksComponent}>
                        <Works title={'Social netwokt'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam tempore vel!'}/>
                    </div>
                    <div className={styles.worksComponent}>
                        <Works title={'Social netwokt'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam tempore vel!'}/>
                    </div>
                    <div className={styles.worksComponent}>
                        <Works title={'Social netwokt'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolores eius quisquam tempore vel!'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWorks;
