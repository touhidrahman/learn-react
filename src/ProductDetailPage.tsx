import React from 'react'
import { IProduct, products } from './ProductsData'
import { RouteComponentProps, Prompt } from 'react-router-dom'

interface IState {
    product?: IProduct
    added: boolean
}

type Props = RouteComponentProps<{ id: string }>

class ProductDetailPage extends React.Component<Props, IState> {
    private navAwayMessage = 'Are you sure to move away?'

    constructor(props: Props) {
        super(props)

        this.state = {
            added: false,
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            const id = Number(this.props.match.params.id)
            const product: IProduct = products.filter((p) => p.id === id)[0]
            this.setState({ product })
        }
    }

    private handleAddClick = () => {
        console.log('TCL: Add to basket clicked :') // ! remove
        this.setState({ added: true })
    }

    render() {
        const product = this.state.product

        return (
            <div className="page-container">
                <Prompt when={!this.state.added} message={this.navAwayMessage} />

                {product ? this.renderProduct(product) : <p>Product not found</p>}
            </div>
        )
    }

    private renderProduct(product: IProduct) {
        return (
            <React.Fragment>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>
                    {new Intl.NumberFormat('en-US', {
                        currency: 'USD',
                        style: 'currency',
                    }).format(product.price)}
                </p>

                {!this.state.added && <button onClick={this.handleAddClick}>Add to basket</button>}
            </React.Fragment>
        )
    }
}

export default ProductDetailPage
