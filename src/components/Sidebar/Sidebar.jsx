import CategoriesTitle from '../CategoriesTitle/CategoriesTitle';
import DropShadow from '../DropShadow/DropShadow';
import './Sidebar.styles.css';

// eslint-disable-next-line no-lone-blocks
{/* <Component prop1="" prop2="">children</Component> */ }

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