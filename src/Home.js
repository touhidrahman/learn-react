import React from 'react'
import Product from './Product'

const c = {
    productsGrid: 'grid grid-cols-3 gap-6 py-12',
}

function Home() {
    const n = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className={c.productsGrid}>
            {n.map((i) => (
                <Product rating={4} price={11.39} key={i.toString()} id={i} title="Lorem ipsum dolor sit amet" />
            ))}
        </div>
    )
}

export default Home
