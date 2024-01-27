import './CategoriesTitle.styles.css';

function CategoriesTitle({fluid = false}) {
    return (<div className={`categories-title-wrapper${fluid ? ' fluid' : ''}`}>
        <h2 className='categories-title'>Categories</h2>
    </div>)
}

export default CategoriesTitle;