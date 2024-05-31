import { useState } from 'react';
import './Info.styles.css';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import InfoTitle from '../InfoTitle/InfoTitle';
import DropShadow from '../DropShadow/DropShadow';

function Info({ addTasks, clearTasks, taskCount }) {
    const [popupActive, setPopupActive] = useState(false);

    function openPopup() {
        setPopupActive(true);
    };

    function closePopup(task) {
        setPopupActive(false);
        addTasks(task)
    };

    return (
        <>
            <div className="info">
                <InfoTitle quantity={taskCount} />
                <Button variant='primary' onClick={openPopup}>Add new task</Button>
                <Button variant='ghost' onClick={clearTasks}>
                    <span className='clear-task-button'>Clear completed</span>
                </Button>
                <DropShadow />
            </div>
            <Popup active={popupActive} setActive={setPopupActive} closePopup={closePopup} />
        </>);
};

export default Info;