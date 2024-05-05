import { useState } from "react";
import "./MainContent.styles.css";
import Filter from "../Filter/Filter";
import Info from "../Info/Info";
import List from "../List/List";
import Task from "../Task/Task";
import ListItem from "../List/ListItem/ListItem";
import DropShadow from "../DropShadow/DropShadow";

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

function MainContent({ tasks, addTasks, editTask }) {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('status');

    const [filterButtons, setFilterButtons] = useState(token && token !== `all` ?
        buttonList.map(button => ({ ...button, isCurrent: button.name.toLocaleLowerCase() === token })) : buttonList);

    const changeTaskDescription = (id, description) => {
        const result = tasks.map(task => task.id === id ? { ...task, description: description } : task);
        editTask(result);
    }

    const toggleTaskStatus = (id, value) => {
        const result = tasks.map(task => task.id === id ? { ...task, isCompleted: value } : task);
        editTask(result);
    }

    let filteredTasks = tasks;

    if (token && token !== `all`) {
        filteredTasks = filteredTasks.filter(task => {
            return token === `completed` && task.isCompleted === true || token === `active` && task.isCompleted === false
        })
    }

    return (<section className="main-content">
        <Info taskCount={filteredTasks.length} addTasks={addTasks} clearTasks={() => editTask(tasks.filter(t => !t.isCompleted))} />
        <div className="list-item-wrapper">
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
            </List>
            <Filter filterButtons={filterButtons} setFilterButtons={setFilterButtons} />
            <DropShadow />
        </div>
    </section>);
}

export default MainContent;