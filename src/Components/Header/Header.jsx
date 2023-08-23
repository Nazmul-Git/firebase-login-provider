/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/login">Sign-In    </Link>
            <Link to="/review"> Review-Page</Link>
        </div>
    );
};

export default Header;