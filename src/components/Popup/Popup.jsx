import React from 'react';
import Button from '../Button/Button';
import CategoriesTitle from '../CategoriesTitle/CategoriesTitle';
import List from '../List/List';
import ListItem from '../List/ListItem/ListItem';
import { categories } from '../Main/Main';
import Tag from '../Tag/Tag';
import './Popup.styles.css';

function Popup({ active, setActive }) {
    return <article className={active ? "popup active" : "popup"} onClick={() => setActive(false)}>
        <section className='popup-content' onClick={e => e.stopPropagation()}>
            <form className='popup-form' >
                <fieldset className='popup-form-fieldset'>
                    <legend className="popup-form-legend visually-hidden">Основные вводные:</legend>
                    <label className='popup-form-title'>create task
                        <input className='popup-form-input' type="text" placeholder='Task description...' />
                    </label>
                    <CategoriesTitle fluid={true} />
                    <List gap={20} >
                        {categories.map(category => (
                            <ListItem>
                                <label>
                                    <input className='visually-hidden' type="radio" name='category' value={category} />
                                    <Tag status={category} size="l" />
                                </label>
                            </ListItem>
                        ))}
                    </List>
                </fieldset>
                <Button variant='submit'>Submit task</Button>
            </form>
        </section>
    </article>
};

export default Popup;