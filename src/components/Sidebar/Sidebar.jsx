import CategoriesTitle from '../CategoriesTitle/CategoriesTitle';
import DropShadow from '../DropShadow/DropShadow';
import './Sidebar.styles.css';

function Sidebar({ children }) {
    return (
        <aside className="sidebar">
            <CategoriesTitle />
            {children}
            <DropShadow />
        </aside>
    );
};

export default Sidebar;