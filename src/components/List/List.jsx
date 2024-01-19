import "./List.styles.css";

function List({children, gap = 0}) {
    return <ul className="list" style={{gap: gap}}>{children}</ul>
};

export default List;