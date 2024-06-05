import { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeContext";
import MoonIcon from "./moon.svg?react";
import SunIcon from "./sun.svg?react";
import './Header.styles.css';


function Header() {
    const { toggle, dark } = useContext(ThemeContext);

    return <header className="header">
        <h1 className='header-logo'>Personal <br />Task Manager</h1>
        <button type='button' className='header-toggle-theme-button' onClick={toggle}>{dark ? <MoonIcon /> : <SunIcon />}</button>
    </header>
}

export default Header;
