import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import {useStateValue} from './StateProvider'

const c = {
    card: 'border border-gray-700 rounded-xs flex flex-col',
    title: 'font-bold text-gray-900',
    body: '',
    rating: 'flex',
    icon: 'text-yellow-500'
}

function Product({id, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({type: 'ADD_TO_BASKET', item: {id, title, price, rating}})
    }

    return (
        <div className={c.card}>
            <h1 className={c.title}>{title}</h1>
            <div className={c.rating}>
                {
                    Array(rating).fill().map((_, i) => (<StarIcon key={i} className={c.icon} />))
                }
            </div>
            <p className={c.body}></p>
            <button onClick={addToBasket} className={c.button}>Add to Basket</button>
        </div>
    )
}

export default Product
