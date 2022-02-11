import styles from './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import RemoveWork from "./remoteWork/RemoteWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

const App = () => {
    return (
        <div className="App">
            <div className={styles.App}>
                <Header/>
                <Main/>
                <Skills/>
                <MyWorks/>
                <RemoveWork/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
