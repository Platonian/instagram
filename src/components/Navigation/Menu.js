import React from 'react'
import { ReactComponent as Home } from '../../images/home.svg'
import { ReactComponent as Explore } from '../../images/explore.svg'
import { ReactComponent as Messenger } from '../../images/messenger.svg'
import { ReactComponent as Notifications } from '../../images/notifications.svg'
import ProfileIcon from './ProfileIcon'

const Menu = () => {
    return (
        <div className="flex items-center flex-shrink-0	">
            <Home className=" cursor-pointer" />
            <Explore className="ml-6 cursor-pointer" />
            <Messenger className="ml-6 cursor-pointer" />
            <Notifications className="ml-6 cursor-pointer" />
            <div className="ml-6 cursor-pointer">
                <ProfileIcon iconSize="small" storyBorder="1" image="https://images.unsplash.com/photo-1618425852579-eded333a2134?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=24&ixlib=rb-1.2.1&q=80&w=24" />
            </div>
        </div>
    )
}

export default Menu
