import Button from "../Button/Button";
import { useContext } from "react";
import { TaskContext } from "../../context/Tasks/TaskContext";
import "./Filter.styles.css";

function Filter({ filterButtons, setFilterButtons }) {
    const { updateQueryParams } = useContext(TaskContext);

    const setFilter = (status) => {
        updateQueryParams({ status });
        setFilterButtons(filterButtons.map(button => ({ ...button, isCurrent: button.name.toLocaleLowerCase() === status })))
    };

    return <nav className="filter">
        {filterButtons.map(button => (
            <Button
                key={button.name}
                variant={`text ${button.isCurrent ? 'current' : ''}`}
                onClick={() => setFilter(button.name.toLowerCase())}>
                {button.name}
            </Button>
        ))}
    </nav>
};

export default Filter;