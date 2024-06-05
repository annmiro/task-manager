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

    return <main className="main">
        <Sidebar name="Categories">
            <List gap={10} direction="column">
                {categories.map(category => (
                    <ListItem key={category}>
                        <Button variant='ghost' onClick={() => updateQueryParams({ category })}>
                            <Tag status={category} size='l'></Tag>
                        </Button>
                    </ListItem>
                ))}
            </List>
            <div className='reset-button-wrapper'>
                <Button variant='primary' onClick={() => updateQueryParams({ category: '' })}>Reset</Button>
            </div>
        </Sidebar>

        <MainContent />
    </main>
}

export default Main;