import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import Error from './pages/error/error.component';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

const JacketsPage = () => (
    <div>
        <h1>jackets</h1>
    </div>
)

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop/hats' component={HatsPage} />
                <Route path='/shop/Jackets' component={JacketsPage} />
                <Route path="*" component={Error} />
            </Switch>
        </div>
    );
}

export default App;
