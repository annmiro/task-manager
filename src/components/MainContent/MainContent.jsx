import "./MainContent.styles.css";
import Filter from "../Filter/Filter";
import Info from "../Info/Info";
import List from "../List/List";
import Task from "../Task/Task";
import ListItem from "../List/ListItem/ListItem";
import DropShadow from "../DropShadow/DropShadow";

function MainContent({ tasks, setTasks }) {
    return (<section className="main-content">
        <Info setTasks={setTasks} />
        <div className="list-item-wrapper">
            <List direction="column">
                {tasks.map(task => (
                    <ListItem>
                        <Task checked={task.isCompleted}
                            description={task.description}
                            categoryName={task.category} />
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