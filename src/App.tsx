import React from 'react'
import logo from './logo.svg'
import './App.scss'

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1>Was geht ab?</h1>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
