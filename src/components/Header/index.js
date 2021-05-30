import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import SearchBar from './SearchBar'
import { ReactComponent as Home } from '../../icons/home.svg'
import { ReactComponent as Explore } from '../../icons/explore.svg'
import { ReactComponent as Messenger } from '../../icons/messenger.svg'
import { ReactComponent as Notifications } from '../../icons/notifications.svg'
import * as ROUTES from '../../constants/routes'

const Header = () => {
    return (
        <header className="px-4 fixed w-full top-0 z-2 border-bottom border-gray-100 shadow h-14 flex items-center justify-around mx-auto">
            <div className="flex justify-between md:w-2/3">
                <div>
                    <Link to={ROUTES.DASHBOARD}>
                        <img className="h-8 cursor-pointer" src={Logo} alt="Instagram logo" />
                    </Link>
                </div>
                <SearchBar />
                <div className="flex items-center flex-shrink-0	">
                    <Home className=" cursor-pointer" />
                    <Explore className="ml-6 cursor-pointer" />
                    <Messenger className="ml-6 cursor-pointer" />
                    <Notifications className="ml-6 cursor-pointer" />
                    <div className="ml-6 cursor-pointer">
                        <span>P</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
