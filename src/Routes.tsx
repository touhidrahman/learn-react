import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import AdminPage from './AdminPage'
import Header from './Header'
import LoginPage from './LoginPage'
import NotFoundPage from './NotFoundPage'
import ProductDetailPage from './ProductDetailPage'
import ProductsPage from './ProductsPage'

const Routes: React.FunctionComponent = () => {
    const [loggedIn, setLoggedIn] = React.useState(true)

    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Redirect exact={true} from="/" to="/products" />
                    <Route path="/products" exact={true} component={ProductsPage} />
                    <Route path="/products/:id" component={ProductDetailPage} />
                    <Route path="/admin">
                        {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/login" component={LoginPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes
