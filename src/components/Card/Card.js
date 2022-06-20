import {useState} from 'react';
import './Card.scss';

const Card = ({...data}) => {

    const [selected, setSelected] = useState(false);

    const {id, meal, value, weight, descr, disabledText, disabled} = data.info;


    const createList = (value) => {
        const items = value.map((item, i) => {
            return (
                <li className='card__item' key={i}>
                    {item}
                </li>
            )
        });
        return (
            <ul className="card__value">
                {items}
            </ul>
        )
    }

    const onClick = (e) => {
        e.preventDefault();
        setSelected(selected => !selected);
    }

    const createLink = (selected, disabled) => {
        if(selected) {
            return (
                <p className="link">
                    {descr}
                </p>
            )
        } else if (disabled) {
            return (
                <p className="link" style={{'color' : '#FFFF66'}}>
                    {disabledText}
                </p>
            )
        } else {
            return (
                <p className="link">Чего сидишь? Порадуй котэ, 
                    <a href="#" onClick={onClick}> купи</a>
                </p>
            )
        }
    }

    const list = createList(value);
    const cardUnderText = createLink(selected, disabled);

    let border,
        className = 'card',
        background;

    if (selected) {
         border = {'border' : '4px solid #D91667'};
         className += ' selected'
         background = {'backgroundColor' : '#D91667'};
    } else if (disabled) {
        border = {'border' : '4px solid #B3B3B3'};
        className += ' disabled'
        background = {'backgroundColor' : '#B3B3B3'};
    } else {
         border = {'border' : '4px solid #1698D9'};
         className += '';
         background = {'backgroundColor' : '#1698D9'};
    }

    return (
        <div className='wrap'>
            <div className={className}
                 style={border}
                 onClick={disabled ? null : () => setSelected(false)}
                 key={id}>
                <div className='card__overlay'
                     style={disabled ? {'display' : 'block'} : null}></div>
                <h3 className="card__subtitle">Сказочное заморское яство</h3>
                <h2 className="card__title"><span>Нямушка</span> <br/> с {meal}</h2>
                    {list}
                <p className='card__weight'
                   style={background}>
                    <span>{weight}</span> кг
                </p>
            </div>
            {cardUnderText}
        </div>
    )
}

export default Card;