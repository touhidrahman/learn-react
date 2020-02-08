import React from 'react'
import { IProduct, products } from './ProductsData'
import { Link, RouteComponentProps, Prompt } from 'react-router-dom'

interface IState {
    products: IProduct[]
    search: string
}

class ProductsPage extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props)

        this.state = {
            products: [],
            search: '',
        }
    }

    componentDidMount() {
        this.setState({
            products,
        })
    }

    static getDerivedStateFromProps(nextProps: RouteComponentProps, prevState: IState) {
        const searchParams = new URLSearchParams(nextProps.location.search)
        const search = searchParams.get('search') || ''
        return {
            products: prevState.products,
            search,
        }
    }

    private renderFilteredProducts(search: string, product: IProduct) {
        if (!search || (search && product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)) {
            return (
                <li key={product.id} className="item">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="page-container">
                <h1>My Shop</h1>
                <ul className="products-list">
                    {this.state.products.map((p) =>
                        this.renderFilteredProducts(this.state.search, p),
                    )}
                </ul>
            </div>
        )
    }
}

export default ProductsPage
