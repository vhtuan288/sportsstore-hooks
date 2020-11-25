import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ShopView from './ShopView';

export default function ShopPage () {
    return (
        <Routes>
            <Route path=":category">
                <ShopView />
            </Route>
            <Route path="/">
                <ShopView />
            </Route>
        </Routes>
    );
}