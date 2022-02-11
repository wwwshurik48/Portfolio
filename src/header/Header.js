import React from 'react';
import styles from './Header.module.css'
import Nav from "../nav/Nav";
import stylesContainer from "../common/styles/Container.module.css";

const Header = () => {
    return (
        <div className={styles.headerBlock}>
            <div className={`${stylesContainer.container} ${styles.headerContainer}`}>
                <div className={styles.headerComponent}>
                    <Nav/>
                </div>
            </div>
        </div>

    )
}
export default Header;
