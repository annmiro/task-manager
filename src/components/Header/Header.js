import './Header.styles.css';
import { ReactComponent as MoonIcon } from '../../images/moon.svg';

function Header() {
    return <header className="header">
        <h1 className='header-logo'>Personal <br />Task Manager</h1>
        <button type='button' className='header-toggle-theme-button'><MoonIcon /></button>
    </header>
};

export default Header;
