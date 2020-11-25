import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import ShopPage from './ShopPage';

export default function ShopConnector () {
    return (
        <div>
            <Routes>
                <Route path="products/*" element={<ShopPage />} />
                <Navigate to="products" />
            </Routes>
        </div>
    );
}
