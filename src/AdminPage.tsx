import React from 'react'
import { NavLink, RouteComponentProps, Route } from 'react-router-dom'
import { products, IProduct } from './ProductsData'

interface IUser {
    id: number
    name: string
    isAdmin: boolean
}

const adminUsers: IUser[] = [
    {
        id: 1,
        name: 'Tom hanks',
        isAdmin: true,
    },
    {
        id: 2,
        name: 'John Doe',
        isAdmin: true,
    },
    {
        id: 3,
        name: 'Mary Jane',
        isAdmin: false,
    },
]

const AdminUserDetail: React.FunctionComponent<RouteComponentProps<{ id: string }>> = (
    props: RouteComponentProps<{ id: string }>,
) => {
    let user: IUser
    if (props.match.params.id) {
        const id = Number(props.match.params.id)
        user = adminUsers.filter((u) => u.id === id)[0]
    } else {
        return null
    }

    return (
        <div>
            <h2>User Details</h2>
            <p>{user.name}</p>
            <p>{user.isAdmin.toString()}</p>
            <p>{user.id}</p>
        </div>
    )
}

const AdminUsers: React.FunctionComponent = () => {
    const renderLink = (user: IUser) => {
        return (
            <NavLink to={`/admin/users/${user.id}`} activeClassName="active">
                {user.name}
            </NavLink>
        )
    }

    return (
        <div>
            <ul>
                {adminUsers.map((user) => (
                    <li key={user.id}>{renderLink(user)}</li>
                ))}
            </ul>
            <Route path="/admin/users/:id" component={AdminUserDetail} />
        </div>
    )
}

const AdminProductsDetail: React.FunctionComponent<RouteComponentProps<{ id: string }>> = (
    props: RouteComponentProps<{ id: string }>,
) => {
    let product: IProduct
    if (props.match.params.id) {
        const id = Number(props.match.params.id)
        product = products.filter((p) => p.id === id)[0]
    } else {
        return null
    }

    return (
        <div>
            <h2>Product Detail</h2>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.id}</p>
            <p>{product.price}</p>
        </div>
    )
}

const AdminProducts: React.FunctionComponent = () => {
    return (
        <div>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <NavLink to={`/admin/products/${p.id}`}>{p.name}</NavLink>
                    </li>
                ))}
            </ul>
            <Route path="/admin/products/:id" component={AdminProductsDetail} />
        </div>
    )
}

const AdminPage: React.FunctionComponent = () => {
    const renderLinks = () => {
        return (
            <ul>
                <li>
                    <NavLink to={`/admin/users`} activeClassName="active">
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/admin/products`} activeClassName="active">
                        Products
                    </NavLink>
                </li>
            </ul>
        )
    }

    const renderRoutes = () => {
        return (
            <React.Fragment>
                <Route path="/admin/users" component={AdminUsers} />
                <Route path="/admin/products" component={AdminProducts} />
            </React.Fragment>
        )
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <p>Welcome admin</p>

            {renderLinks()}

            {renderRoutes()}
        </div>
    )
}

export default AdminPage
