import React from 'react'

const ProfileIcon = ({ iconSize, image, storyBorder }) => {
    const iconWidth = (iconSize === 'large') ? 'w-12' : iconSize === 'medium' ? 'w-8' : 'w-6'
    const getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    let randomId = getRandomInt(1, 70)
    let profileImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`

    return (
        <div>
            <img className={`${iconWidth} ${storyBorder==="1"?"border":"border-"+storyBorder} rounded-full p-0.5 `} src={profileImage} alt="Profile" />
        </div>
    )
}

export default ProfileIcon
