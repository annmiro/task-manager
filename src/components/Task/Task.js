import Checkbox from '../Checkbox/Checkbox';
import Tag from '../Tag/Tag';
import './Task.styles.css';

function Task({ checked, description, categoryName }) {
    return (
        <article className="task">
            <Checkbox checked={checked} description={description}/>
            <Tag status={categoryName}/>
        </article>);
};

export default Task;