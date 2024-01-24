import "./List.styles.css";

function List({ direction = 'row', children, gap = 0 }) {
    return <ul className="list" style={{ gap: gap, flexDirection: direction }}>{children}</ul>
};

export default List;