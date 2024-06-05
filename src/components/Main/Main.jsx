import './Main.styles.css';
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
import Tag from '../Tag/Tag';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';
import Button from '../Button/Button';
import { useContext } from 'react';
import { categories } from './Main.data';
import { TaskContext } from '../../context/Tasks/TaskContext';

function Main() {
    const { updateQueryParams } = useContext(TaskContext);

    const setFilter = (category) => {
        updateQueryParams({ category });
    };

    return <main className="main">
        <Sidebar name="Categories">
            <List gap={10} direction="column">
                {categories.map(category => (
                    <ListItem key={category}>
                        <Button variant='ghost' onClick={() => setFilter(category)}>
                            <Tag status={category} size='l'></Tag>
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Sidebar>
        <MainContent />
    </main>
}

export default Main;