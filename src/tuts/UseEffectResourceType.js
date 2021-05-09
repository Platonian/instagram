import React, { useState, useEffect } from 'react'

const UseEffectResourceType = () => {
    const [resourceType, setResourceType] = useState('users')
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    })
    return (
        <>
            <h1>UseEffect and Resource Type</h1>
            <div>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h2>{resourceType}</h2>
            {items.map((item) => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}

export default UseEffectResourceType
