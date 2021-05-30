import React, { useEffect } from 'react'
import Timeline from '../components/Timeline'
import Header from '../components/Header.js'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Instagram'
    }, [])
    return (
        <div>
            <Header />
            <div className="grid grid-cols-3 gap-4 max-w-screen-lg mx-auto justify-between">
                <div className="col-span-2">
                    <Timeline />
                </div>
                <div className="col-span-1">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
