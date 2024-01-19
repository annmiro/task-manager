import './Main.styles.css';
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
import Tag from '../Tag/Tag';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';

function Main() {
    return <main className="main">
        <Sidebar name="Categories">
            <List gap={10}>
                <ListItem>
                    <Tag status='completed'>Completed</Tag >
                </ListItem>
                <ListItem>
                    <Tag status='urgent'>Urgent</Tag >
                </ListItem>
                <ListItem>
                    <Tag status='important'>Important</Tag >
                </ListItem>
                <ListItem>
                    <Tag status='later'>Later</Tag>
                </ListItem>
                <ListItem>
                    <Tag status='study'>To study</Tag>
                </ListItem>
            </List>
        </Sidebar>
        <MainContent />
    </main>
}

export default Main;