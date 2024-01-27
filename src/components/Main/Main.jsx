import './Main.styles.css';
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
import Tag from '../Tag/Tag';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';

export const categories = ['completed', 'urgent', 'important', 'later', 'study'];

function Main() {
    return <main className="main">
        <Sidebar name="Categories">
            <List gap={10} direction="column">
                {categories.map(category => (
                    <ListItem>
                        <Tag status={category} size='l'/>
                    </ListItem>
                ))}
            </List>
        </Sidebar>
        <MainContent />
    </main>
}

export default Main;