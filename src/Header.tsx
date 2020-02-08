import React from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'

const Header: React.FunctionComponent<RouteComponentProps> = (props: RouteComponentProps) => {
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        const params = new URLSearchParams(props.location.search)
        setSearch(params.get('search') || '')
    }, [])

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') props.history.push(`/products?search=${search}`)
    }

    return (
        <header>
            <h1>React Shop</h1>
            <div className="search">
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                />
            </div>
            <nav>
                <NavLink to="/products" activeClassName="active">
                    Products
                </NavLink>
                <NavLink to="/admin" activeClassName="active">
                    Admin
                </NavLink>
            </nav>
        </header>
    )
}

export default withRouter(Header)
