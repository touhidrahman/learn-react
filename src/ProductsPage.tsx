import React from 'react'
import { IProduct, Products } from './ProductsData'

interface IState {
    products: IProduct[]
}

class ProductsPage extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props)

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        this.setState({
            products: Products,
        })
    }

    render() {
        return (
            <div className="page-container">
                <h1>My Shop</h1>
                <ul className="products-list">
                    {this.state.products.map((p) => (
                        <li key={p.id} className="item">
                            {p.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProductsPage
