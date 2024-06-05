import { useState, useContext } from 'react';
import './Info.styles.css';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import InfoTitle from '../InfoTitle/InfoTitle';
import DropShadow from '../DropShadow/DropShadow';
import { TaskContext } from "../../context/Tasks/TaskContext";

function Info({ taskCount }) {
    const [popupActive, setPopupActive] = useState(false);
    const { addTask, clearCompletedTasks } = useContext(TaskContext);

    function openPopup() {
        setPopupActive(true);
    };

    function closePopup(task) {
        setPopupActive(false);
        addTask(task);
    };

    return (
        <>
            <div className="info">
                <InfoTitle quantity={taskCount} />
                <Button variant='primary' onClick={openPopup}>Add new task</Button>
                <Button variant='ghost' onClick={clearCompletedTasks}>
                    <span className='clear-task-button'>Clear completed</span>
                </Button>
                <DropShadow />
            </div>
            <Popup active={popupActive} setActive={setPopupActive} closePopup={closePopup} />
        </>);
};

export default Info;