import './TaskTag.styles.css'
import Tag from "../Tag/Tag";

function TaskTag({status}) {
    return <div className='task-tag'>
        <Tag status={status}/>
    </div>
}

export default TaskTag;