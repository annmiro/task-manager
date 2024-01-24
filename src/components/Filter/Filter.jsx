import "./Filter.styles.css";
import Button from "../Button/Button";

function Filter() {
    return <nav className="filter">
        <Button variant='text'>Active</Button>
        <Button variant='text current'>All</Button>
        <Button variant='text'>Completed</Button>
    </nav>
};

export default Filter;