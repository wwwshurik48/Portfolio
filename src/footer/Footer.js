import React from 'react';
import styles from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Alexander Perov</h2>
                <div className={styles.socialBlock}>
                    <a href={''}><img className={styles.icon}
                                      src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/450px-Facebook_icon_2013.svg.png?20161223201621'}
                                      alt={'Facebook'}/></a>
                    <a href={''}><img className={styles.icon}
                                      src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png'}
                                      alt={'VK'}/></a>
                    <a href={''}><img className={styles.icon}
                                      src={'https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg'}
                                      alt={'Instagram'}/></a>
                    <a href={''}><img className={styles.icon}
                                      src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png'}
                                      alt={'Telegram'}/></a>
                </div>
                <h3 className={styles.rights}>
                    &#169; 2022 All rights reserved </h3>
            </div>

        </div>

    );
}

export default Footer;
