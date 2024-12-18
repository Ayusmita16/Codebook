import React from 'react'
import { Link } from 'react-router-dom'

export function Hero() {


    return (
        <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center max-h-lg">

            <div className="text m-5">
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">The Ultimate eBook Store</h1>
                <p className="text-2xl font-normal text-gray-500 dark:text-gray-400 mb-6">CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally</p>
                <Link to="/products" className="inline-flex justify-center items-center text-4xl py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Explore eBooks
                </Link>
            </div>
            <div classNameName="visual my-5 lg:max-w-lg">
                <img classNameName="rounded-lg max-h-full" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="CodeBook Hero Section" />
            </div>

        </section>
    )
}
