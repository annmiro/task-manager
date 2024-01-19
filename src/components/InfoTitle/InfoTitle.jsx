import './InfoTitle.styles.css'

function InfoTitle({quantity = 0}) {
    const title = `${quantity} task${quantity > 1 ? 's' : ''}`;

    return <span className='info-title'>{title}</span>
}

export default InfoTitle;