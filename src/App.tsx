import React from 'react'
import logo from './logo.svg'
import './App.css'
import Confirm from './Confirm'

interface IState {
    confirmOpen: boolean
    confirmMessage: string
    confirmVisible: boolean
    countDown: number
}

class App extends React.Component<{}, IState> {
    private timer = 0

    constructor(props: {}) {
        super(props)

        this.state = {
            confirmOpen: false,
            confirmMessage: 'Please hit the confirm button',
            confirmVisible: true,
            countDown: 10,
        }
    }

    componentDidMount() {
        this.timer = window.setInterval(() => this.handleTimerTick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    private handleTimerTick() {
        this.setState(
            {
                confirmMessage: `Please hit the confirm button in ${this.state.countDown} seconds`,
                countDown: this.state.countDown - 1,
            },
            () => {
                if (this.state.countDown <= 0) {
                    clearInterval(this.timer)
                    this.setState({
                        confirmMessage: 'Too late to confirm',
                        confirmVisible: false,
                    })
                }
            },
        )
    }

    private handleOkClick = () => {
        this.setState({ confirmOpen: false, confirmMessage: 'You have clicked OK' })
        clearInterval(this.timer)
    }

    private handleCancelClick = () => {
        this.setState({ confirmOpen: false, confirmMessage: 'You have canceled' })
        clearInterval(this.timer)
    }

    private handleConfirmClick = () => {
        this.setState({ confirmOpen: true })
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <p>{this.state.confirmMessage}</p>
                {this.state.confirmVisible && (
                    <button onClick={this.handleConfirmClick}>Open Modal</button>
                )}
                <Confirm
                    open={this.state.confirmOpen}
                    title="A confirm modal"
                    content="Are you sure?"
                    onOkClick={this.handleOkClick}
                    onCancelClick={this.handleCancelClick}
                />
            </div>
        )
    }
}

export default App
