import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../page';
import { ProductList } from '../page';
import { ProductDetails } from '../page/Product/components/ProductDetails';
import { Register } from '../page/Register';
import { Login } from '../page/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { CartPage } from '../page/Cart/cartPage';
import { OrderPage } from '../page/Order/OrderPage';
import { DashboardPage } from '../page/Dashboard/DashboardPage';
import { PageNotFound } from '../page/PageNotFound';

export function AllRoutes(props) {


    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
            <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
