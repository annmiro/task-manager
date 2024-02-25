import "./MainContent.styles.css";
import Filter from "../Filter/Filter";
import Info from "../Info/Info";
import List from "../List/List";
import Task from "../Task/Task";
import ListItem from "../List/ListItem/ListItem";
import DropShadow from "../DropShadow/DropShadow";

function MainContent({ tasks, addTasks, editTask }) {
    const changeTaskDescription = (id, description) => {
        const result = tasks.map(task => task.id === id ? { ...task, description: description } : task);
        editTask(result);
    }

    const toggleTaskStatus = (id, value) => {
        const result = tasks.map(task => task.id === id ? { ...task, isCompleted: value } : task);
        editTask(result);
    }

    return (<section className="main-content">
        <Info addTasks={addTasks} clearTasks={() => editTask(tasks.filter(t => !t.isCompleted))} />
        <div className="list-item-wrapper">
            <List direction="column">
                {tasks.map(task => (
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
            <Filter />
            <DropShadow />
        </div>
    </section>);
}

export default MainContent;