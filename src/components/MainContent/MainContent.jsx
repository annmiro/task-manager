import { useState, useContext } from "react";
import "./MainContent.styles.css";
import Filter from "../Filter/Filter";
import Info from "../Info/Info";
import List from "../List/List";
import Task from "../Task/Task";
import ListItem from "../List/ListItem/ListItem";
import DropShadow from "../DropShadow/DropShadow";
import { TaskContext } from "../../context/Tasks/TaskContext";
import EmptyText from "../EmptyText/EmptyText";

const buttonList = [
    {
        name: 'Active',
        isCurrent: false,
    },
    {
        name: 'All',
        isCurrent: true,
    },
    {
        name: 'Completed',
        isCurrent: false,
    },
];

function MainContent() {
    const { tasks, changeTaskDescription, toggleTaskStatus } = useContext(TaskContext);

    const query = new URLSearchParams(window.location.search);
    const queryStatus = query.get('status');
    const queryCategory = query.get('category');

    const [filterButtons, setFilterButtons] = useState(queryStatus && queryStatus !== `all` ?
        buttonList.map(button => ({ ...button, isCurrent: button.name.toLocaleLowerCase() === queryStatus })) : buttonList);

    let filteredTasks = tasks;

    if (queryStatus && queryStatus !== `all`) {
        filteredTasks = filteredTasks.filter(task => {
            return queryStatus === `completed` && task.isCompleted === true || queryStatus === `active` && task.isCompleted === false
        })
    }

    if (queryCategory) {
        filteredTasks = filteredTasks.filter(task => task.category === queryCategory)
    }

    return (<section className="main-content">
        <Info taskCount={filteredTasks.length} />

        <div className="list-item-wrapper">
            {filteredTasks.length !== 0 ?
                <List direction="column" fluid justify="flex-start">
                    {filteredTasks.map(task => (
                        <ListItem key={task.id}>
                            <Task checked={task.isCompleted}
                                description={task.description}
                                categoryName={task.category}
                                changeTaskDescription={(value) => changeTaskDescription(task.id, value)}
                                toggleTaskStatus={(value) => toggleTaskStatus(task.id, value)} />
                        </ListItem>
                    )
                    )}
                </List> :
                <EmptyText />}
            <Filter filterButtons={filterButtons} setFilterButtons={setFilterButtons} />
            <DropShadow />
        </div>
    </section>);
}

export default MainContent;