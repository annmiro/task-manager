import Button from '../Button/Button';
import InfoTitle from '../InfoTitle/InfoTitle';
import './Info.styles.css';

function Info() {
    return <div className="info">
        <InfoTitle quantity={5}/>
        <Button variant='primary'>Add new task</Button>
        <Button variant='text'>Clear completed</Button>
    </div>
};

export default Info;