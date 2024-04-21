import "./List.styles.css";

function List({ direction = 'row', justify = 'center', fluid = false, children, gap = 0 }) {
    return <ul className="list" style={{ gap: gap, flexDirection: direction, flexGrow: fluid ? 1 : 0, justifyContent: justify }}>{children}</ul>
};

export default List;