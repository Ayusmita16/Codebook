import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '../page/Product/components/Rating'
import { useCart } from '../context'
import { useState } from 'react'

export const ProductCard = ({ product }) => {
    const { id, name, overview, poster, price, best_seller, rating } = product

    const { cartList, addToCart, removeFromCart } = useCart();
    const [inBag, setInBag] = useState(false);

    useEffect(() => {
        const present = cartList.find(x => x.id === product.id)
        if (present)
            setInBag(true)
        else setInBag(false)

    }, [cartList, product.id])

    return (


        <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

            <Link to={`/products/${id}`} className="relative">
                {best_seller && (<span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>)}
                <img className=" rounded-t-lg w-full h-64" src={poster} alt="product image" />
            </Link>

            <div className="p-5">
                <Link to={`/products/${id}`} >
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Rating rating={rating} />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}.0</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    {inBag ?
                        <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Remove Item <i className="ml-1 bi bi-trash3"></i></button> :
                        <button onClick={() => addToCart(product)} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>Add to cart</button>}

                </div>
            </div>
        </div>

    )
}
