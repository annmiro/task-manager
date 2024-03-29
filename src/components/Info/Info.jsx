import { useState } from 'react';
import './Info.styles.css';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import InfoTitle from '../InfoTitle/InfoTitle';
import DropShadow from '../DropShadow/DropShadow';

function Info({setTasks}) {
    const [popupActive, setPopupActive] = useState(false);
    
    function openPopup() {
        setPopupActive(true);
    };

    function closePopup(task) {
        setPopupActive(false);
        setTasks(task)
    };

    return (
        <>
            <div className="info">
                <InfoTitle quantity={5} />
                <Button variant='primary' onClick={openPopup} >Add new task</Button>
                <Button variant='text'>Clear completed</Button>
                <DropShadow/>
            </div>
            <Popup active={popupActive} setActive={setPopupActive} closePopup={closePopup} />
        </>);
};

export default Info;