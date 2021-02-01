import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from '../StateProvider'

const c = {
    header: 'flex justify-between bg-black w-full text-white',
    brand: 'py-3 text-xl font-bold pl-4',
    headerRight: 'flex items-center',
    searchBarContainer: 'py-3 flex',
    searchBar: 'h-6',
    searchBarIcon: 'bg-yellow-500 text-black p-1 hover:bg-yellow-600',
    menuLinks: 'text-sm font-bold ml-4 space-x-4 flex',
    menuLabel: 'hover:text-gray-200',
    shoppingBasketIcon: 'px-3',
    iconContainer: ''
}

function Header() {
    const [{basket}] = useStateValue();

    console.log('TCL: basket :', basket); // ! remove

    return (
        <nav className={c.header}>
            <Link to="/">
                <div className={c.brand}>
                    Amazon
                </div>
            </Link>

            <section className={c.headerRight}>
                <div className={c.searchBarContainer}>
                    <input type="text" className={c.searchBar}></input>
                    <SearchIcon className={c.searchBarIcon} />
                </div>

                <div className={c.menuLinks}>
                    <div className={c.menuLabel}>
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                    <div className={c.menuLabel}>
                        <Link to="/login">
                            Logout
                        </Link>
                    </div>
                    <div className={c.iconContainer}>
                        <Link to="/checkout">
                            <ShoppingBasketIcon className={c.shoppingBasketIcon} />
                            {basket?.length}
                        </Link>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Header
