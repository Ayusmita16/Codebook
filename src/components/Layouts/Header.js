import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../logo.svg";
import { Search } from '../Search';
import { DropdownLoggedOut } from '../../page/Product/components/DropdownLoggedOut';
import { DropdownLoggedIn } from '../../page/Product/components/DropdownLoggedIn';
import { useCart } from '../../context';

export function Header(props) {
    const { cartList } = useCart();
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"))

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codebook</span>
                    </Link>
                    <div className="flex items-center relative">
                        <span onClick={() => { setDarkMode(!darkMode) }} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                        <span onClick={() => { setSearch(!search) }} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                        <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                            <span className="text-2xl bi bi-cart-fill relative">
                                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                            </span>
                        </Link>
                        <span onClick={() => setShow(!show)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                        {show && (token ? <DropdownLoggedIn setDropdown={setShow} /> : <DropdownLoggedOut setDropdown={setShow} />)}
                    </div>

                </div>
            </nav>
            {search && <Search setSearch={setSearch} />}
        </header>
    )
}
