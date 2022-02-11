import React from 'react';
import styles from './Contacts.module.css'
import stylesContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form action={''} className={styles.contactsForm}>
                    <input placeholder={'Your name'}/>
                    <input placeholder={'Your e-mail'}/>
                    <textarea placeholder="Your message" name="" id="" cols="30" rows="10"/>
                </form>
                <button className={styles.button}>Send</button>
            </div>

        </div>

    );
}

export default Contacts;
