import React, { useEffect } from 'react'
import Timeline from '../components/Timeline'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Instagram'
    }, [])
    return (
        <div>
            {/* <Header /> */}
            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard
