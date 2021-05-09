import React, { useEffect, useState } from 'react'

const UseEffectWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return (() => window.removeEventListener('resize', handleResize))
    })

    return (
        <div>
            <h1>UseEffect and WindowWidth</h1>
            <div>{windowWidth}</div>
        </div>
    )
}

export default UseEffectWindowWidth
