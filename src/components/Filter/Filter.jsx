import { useState } from "react";
import "./Filter.styles.css";
import Button from "../Button/Button";

function Filter({ filterButtons, setFilterButtons }) {
    const [queryParams, setQueryParams] = useState(new URLSearchParams(window.location.search));

    const updateQueryParams = (newParams) => {
        const updatedParams = new URLSearchParams(queryParams);
        for (const [key, value] of Object.entries(newParams)) {
            updatedParams.set(key, value);
        }
        setQueryParams(updatedParams);
        window.history.replaceState(null, null, `?${updatedParams.toString()}`);
    };

    const setFilter = (status) => {
        console.log(status)
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