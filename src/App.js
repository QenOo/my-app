import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Error from './pages/error/error.component';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route path="*" component={Error} />
            </Switch>
        </div>
    );
}

export default App;
