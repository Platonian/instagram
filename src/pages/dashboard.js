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
            <div className="grid mt-20">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard
