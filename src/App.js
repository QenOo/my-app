import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Error from './pages/error/error.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/signin' component={SignInAndSignUp} />
                <Route path="*" component={Error} />
            </Switch>
        </div>
    );
}

export default App;
