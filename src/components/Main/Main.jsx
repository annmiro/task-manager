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
                id: 3,
            }])
    }

    return <main className="main">
        <Sidebar name="Categories">
            <List gap={10} direction="column">
                {categories.map(category => (
                    <ListItem>
                        <Button variant='ghost'>
                            <Tag status={category} size='l'></Tag>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Sidebar>
        <MainContent tasks={tasks} setTasks={addTask} />
    </main>
}

export default Main;