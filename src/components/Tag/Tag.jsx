import "./Tag.styles.css";

// const props = {};
// const {children} = props;

const tagName = {
    completed: 'Completed',
    urgent: 'Urgent',
    important: 'Important',
    later: 'Later',
    study: 'To study',
}


function Tag({ status = '' }) {
    return <span className={`tag ${status}`}>{tagName[status]}</span>;
}

export default Tag;