import React from 'react'
import {useStateValue} from './StateProvider'

const c = {
    container: 'py-12 '
}

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className={c.container}>
            Checkout
        </div>
    )
}

export default Checkout
