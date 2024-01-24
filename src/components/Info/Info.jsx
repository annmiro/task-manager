import { useState } from 'react';
import './Info.styles.css';
import Popup from '../Popup/Popup';
import Button from '../Button/Button';
import InfoTitle from '../InfoTitle/InfoTitle';

function Info() {
    // const [popupActive, setPopupActive] = useState(false);
    function openPopup() {
        console.log('click');
        setPopupActive(true);
    };

    return (
        <>
            <div className="info">
                <InfoTitle quantity={5} />
                <Button variant='primary' onClick={() => alert('click')} >Add new task</Button>
                <Button variant='text'>Clear completed</Button>
            </div>
            {/* <Popup active={popupActive} setActive={setPopupActive} /> */}
        </>);
};

export default Info;