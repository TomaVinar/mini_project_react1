import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {apiKey} from '../../configs/url';

const Layout = () => {
    return (
        <div>
            <h2></h2>
            <NavLink to={`discover/movie?api_key=ba44e88dbb2a70c729fbbb46c3d5cee3`}>All Movies</NavLink>
            <div><Outlet/></div>
        </div>
    );
};

export {Layout};