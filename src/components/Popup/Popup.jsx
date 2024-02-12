import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Button from '../Button/Button';
import CategoriesTitle from '../CategoriesTitle/CategoriesTitle';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';
import { categories } from '../Main/Main.data';
import Tag from '../Tag/Tag';
import './Popup.styles.css';

function Popup({ active, setActive, closePopup }) {
    const [formData, setFormData] = useState({ description: '', category: '' });
    const popupRef = useRef(null);

    useOutsideClick(popupRef, () => setActive(false))

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        closePopup(formData);
    }

    return (
        (
            <article className={active ? "popup active" : "popup"} >
                {active && <section className='popup-content' ref={popupRef}>
                    <form className='popup-form' onSubmit={onSubmit} >
                        <fieldset className='popup-form-fieldset'>
                            <legend className="popup-form-legend visually-hidden">Основные вводные:</legend>
                            <label className='popup-form-title'>create task
                                <input className='popup-form-input' type="text" name='description' placeholder='Task description...' onChange={handleChange} />
                            </label>
                            <CategoriesTitle fluid={true} />
                            <List gap={20} >
                                {categories.map((category, index) => (
                                    <ListItem key={index}>
                                        <label>
                                            <input className='visually-hidden input-radio' type="radio" name='category' value={category} onChange={handleChange} />
                                            <div className='tag-wrapper'>
                                                <Tag status={category} size="l" />
                                            </div>
                                        </label>
                                    </ListItem>
                                ))}
                            </List>
                        </fieldset>
                        <Button variant='submit'>Submit task</Button>
                    </form>
                </section>}
            </article>
        )
    )
};

export default Popup;