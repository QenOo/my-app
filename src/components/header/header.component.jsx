import './header.styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as MyLogo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
            <Link className="logo-container" to="/">
                <MyLogo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/">Home</Link>
                <Link className="option" to="/shop">Shop Page</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ? 
                        <Link className="option" to="" onClick={() => auth.signOut()} >Sign out</Link>
                    : 
                        <Link className="option" to="/signin">Sign In</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null :
                <CartDropdown />
            }
        </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);