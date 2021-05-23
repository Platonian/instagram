import { useContext, useEffect, useState } from 'react'
import { Link, Route, useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import {doesUsernameExist} from '../services/firebase'

const Signup = () => {
    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || emailAddress === ''


    useEffect(() => {
        document.title = "Sign Up - Instagram"
    }, [])

    const handleSignup = async (event) => {
        event.preventDefault()

        const usernameExists = await doesUsernameExist(username)
        console.log(usernameExists)
        if(!usernameExists) {
            try {
                const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
                console.log(createdUserResult)

                await createdUserResult.user.updateProfile({
                    displayName: username
                })
                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    following: [],
                    dateCreated: Date.now()
                })

                history.push(ROUTES.DASHBOARD)

            } catch (error) {
                setUsername('')
                setFullName('')
                setEmailAddress('')
                setPassword('')
                setError(error.messsage)
            }
        } else {
            setError('That username is already taken, please try another.')
        }
        
    }
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="Instagram with profile" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-primary mb-4">
                    <h1 className="flex justify-center w-full">
                        <img className="h-10 my-2" src="/images/logo.png" alt="Instagram logo" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleSignup} method="POST">
                    <input
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                            aria-label="Enter your username"
                            type="text"
                            placeholder="Username"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                            aria-label="Enter your full name"
                            type="text"
                            placeholder="Full Name"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && `opacity-50`}`}>
                            Sign Up
                </button>


                    </form>
                </div>
                <div className="flex justify-center flex-col items-center w-full bg-white p-4 rounded border border-gray-primary">
                    <p className="text-sm">Already have an account?{` `}
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">Log In</Link>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Signup

// text-red-primary
//  text-gray-base
// border-gray-primary
// bg-blue-medium
// text-blue-medium