import React, { useEffect } from 'react'
import Quotes from 'randomquote-api'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import Header from '../components/Header'
const NotFound = () => {
    useEffect(() => {
        document.title = `Not Found - Instagram`
    })
    const randomQuote = Quotes.randomQuote()
    return (
        <div className="flex flex-col">
            <Header />
            <div className="my-20 mx-auto max-w-screen-lg">
                <p className="mb-4 text-center font-bold text-2xl">Sorry, this page isn't available.</p>
                <p className="mb-40 text-center text-sm">The link you followed may be broken, or the page may have been removed. <Link to={ROUTES.DASHBOARD} className="font-bold text-blue-medium">Go back to Instagram</Link></p>
                <p className="text-gray-500 text-center text-sm italic">{`"${randomQuote.quote}"`}</p>
            </div>
        </div>
    )
}

export default NotFound
