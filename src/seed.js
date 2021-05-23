export const seedDatabase = (firebase) => {
    const users = [
        {
            userId: 'IW19vxKUVaeMIUqM01AmGtex9Rr2',
            username: 'prince',
            fullName: 'Prince Diwakar',
            emailAddress: 'princediwakar25@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'rahul',
            fullName: 'Rahul Kumar',
            emailAddress: 'rahul@gmail.com',
            following: ['IW19vxKUVaeMIUqM01AmGtex9Rr22'],
            followers: ['IW19vxKUVaeMIUqM01AmGtex9Rr2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'harsh',
            fullName: 'Harsh Singh',
            emailAddress: 'harsh@gmail.com',
            following: ['2'],
            followers: ['2', 'IW19vxKUVaeMIUqM01AmGtex9Rr22', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'rohit',
            fullName: 'Rohit Singh',
            emailAddress: 'rohit@gmail.com',
            following: ['2'],
            followers: ['2', '3', 'IW19vxKUVaeMIUqM01AmGtex9Rr22'],
            dateCreated: Date.now()
        },
    ]
    for (let i = 0; i < users.length; i++) {
        firebase.firestore().collection('users').add(users[i])
    }
}
