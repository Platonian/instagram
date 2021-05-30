import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'
import * as ROUTES from '../constants/routes'

const Header = () => {
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)

    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1 className="flex justify-center w-full" aria-label="Instagram Logo">
                            <Link to={ROUTES.DASHBOARD}>
                                <img src="/images/logo.png" alt="Instagram" className="mt-2 w-1/2" />
                            </Link>
                        </h1>
                    </div>
                    <div className="flex items-center text-gray-700 text-center">
                        {
                            user ?
                                (
                                    <>
                                        <Link to={ROUTES.DASHBOARD}>
                                            <svg aria-label="Home" className="h-6 w-6 mr-6 text-black-light" viewBox="0 0 48 48" stroke="currentColor"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                                        </Link>
                                        {/* <Link to={ROUTES.DASHBOARD}>
                                            <svg aria-label="Home" className="h-6 w-6" fill="#262626" viewBox="0 0 48 48" stroke="currentColor"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
                                        </Link> */}

                                        <button
                                            type="button"
                                            title="Sign Out"
                                            onClick={() => firebase.auth().signOut()}
                                            onKeyDown={e => {
                                                if (e.key === 'Enter') firebase.auth().signOut()
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                        </button>
                                        <div className="flex items-center cursor-pointer">
                                            <Link to={`/p/${user.displayName}`}>
                                                {user.displayName
                                                    ?
                                                    <img
                                                        className="rounded-full h-8 w-8"
                                                        src={`/images/avatars/${user.displayName}.jpg`}
                                                        alt={`${user.displayName} profile`}
                                                    />
                                                    :
                                                    <img
                                                        className="rounded-full h-8 w-8"
                                                        src={`/images/avatars/default.png`}
                                                        alt="My profile"
                                                    />
                                                }
                                            </Link>
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        <Link to={ROUTES.LOGIN}>
                                            <button
                                                type="button"
                                                className={`bg-blue-medium text-sm text-white rounded w-20 h-8 font-bold`}
                                            >
                                                Log In
                                        </button>
                                        </Link>
                                        <Link to={ROUTES.SIGNUP}>
                                            <button
                                                type="button"
                                                className={`text-blue-medium text-sm  rounded w-20 h-8 font-bold`}
                                            >
                                                Sign Up
                                        </button>
                                        </Link>


                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
