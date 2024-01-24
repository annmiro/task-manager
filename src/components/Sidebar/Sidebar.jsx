import './Sidebar.styles.css';

// eslint-disable-next-line no-lone-blocks
{/* <Component prop1="" prop2="">children</Component> */ }

function Sidebar({ name, children }) {
    return (
        <aside className="sidebar">
            <div className='sidebar-title-wrapper'>
                <h2 className='sidebar-title'>{name}</h2>
            </div>
            {children}
        </aside>
    );
};

export default Sidebar;