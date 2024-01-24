import React from 'react';
import Button from '../Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import './Popup.styles.css';

function Popup({ active, setActive }) {
    return <article className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
        <section className='popup-content' onClick={e => e.stopPropagation()}>
            <form className='popup-form' >
                <label className='popup-form-title'>create task
                    <input className='popup-form-input' type="text" placeholder='Task description...' />
                </label>
                <Button variant='submit'>Submit task</Button>
            </form>
        </section>

    </article>
};

export default Popup;