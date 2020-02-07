import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AdminPage from './AdminPage'
import ProductsPage from './ProductsPage'

const Routes: React.SFC = () => {
    return (
        <Router>
            <div>
                <Route path="/products" componet={ProductsPage} />
                <Route path="/admin" componet={AdminPage} />
            </div>
        </Router>
    )
}

export default Routes
