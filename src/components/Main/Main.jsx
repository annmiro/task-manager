import './Main.styles.css';
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
import Tag from '../Tag/Tag';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';
import Button from '../Button/Button';
import { useState } from 'react';
import { initialTasks, categories } from './Main.data';

function Main() {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = (newTask) => {
        setTasks([
            ...tasks, {
                ...newTask,
                isCompleted: false,
                id: Math.max(...tasks.map((task) => task.id)) + 1,
            }])
    }
console.log(tasks)

    return <main className="main">
        <Sidebar name="Categories">
            <List gap={10} direction="column">
                {categories.map(category => (
                    <ListItem key={category}>
                        <Button variant='ghost'>
                            <Tag status={category} size='l'></Tag>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Sidebar>
        <MainContent tasks={tasks} addTasks={addTask} editTask={setTasks} />
    </main>
}

export default Main;