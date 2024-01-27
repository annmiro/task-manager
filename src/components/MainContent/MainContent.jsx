import "./MainContent.styles.css";
import Filter from "../Filter/Filter";
import Info from "../Info/Info";
import List from "../List/List";
import Task from "../Task/Task";
import ListItem from "../List/ListItem/ListItem";
import DropShadow from "../DropShadow/DropShadow";

function MainContent() {
    return (<section className="main-content">
        <Info />
        <div className="list-item-wrapper">
            <List direction="column">
                <ListItem>
                    <Task checked={true}
                        description='Memorize the fifty states and their capitals'
                        categoryName='completed' />
                </ListItem>
                <ListItem>
                    <Task checked={true}
                        description='Memorize the fifty states and their capitals'
                        categoryName='urgent' />
                </ListItem>
                <ListItem>
                    <Task checked={true}
                        description='Memorize the fifty states and their capitals'
                        categoryName='important' />
                </ListItem>
                <ListItem>
                    <Task checked={true}
                        description='Memorize the fifty states and their capitals'
                        categoryName='later' />
                </ListItem>
                <ListItem>
                    <Task checked={true}
                        description='Memorize the fifty states and their capitals'
                        categoryName='study' />
                </ListItem>
            </List>
            <Filter />
            <DropShadow />
        </div>
    </section>);
}

export default MainContent;