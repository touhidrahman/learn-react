import React from 'react'
import logo from './logo.svg'
import './App.css'
import Confirm from './Confirm'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Confirm title="A confirm modal" content="Are you sure?" />
        </div>
    )
}

export default App
