import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {            count: 0,
            color: "",
            isLoggedIn: false
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
        increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    
        componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }
    
    render() {   
        let buttonText = this.state.isLoggedIn ? "Proceed to Buy" : "Back to home page"
        let displayText = this.state.isLoggedIn ? "Card details" : "Home Page"
        return (
            <div>
                            <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default App
