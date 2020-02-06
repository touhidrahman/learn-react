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
            <Confirm />
        </div>
    )
}

export default App
