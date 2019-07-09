import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss'

const navigationItems = () => (
    <ul className='navigation-items'>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/orders' >Orders</NavigationItem>
    </ul>
);

export default navigationItems;
