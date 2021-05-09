import React from 'react'
import Logo from '../../images/logo.png'
import Menu from './Menu'
import SearchBar from './SearchBar'

const Navigation = () => {
    return (
        <div className="px-4 fixed w-full top-0 z-2 border-bottom border-gray-100 shadow h-14 flex items-center justify-around mx-auto">
            <div className="flex justify-between md:w-2/3">
                <img className="h-8 cursor-pointer" src={Logo} alt="Instagram logo"/>
                <SearchBar/>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation
