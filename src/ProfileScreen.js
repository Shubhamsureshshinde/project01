import React from 'react'
import './profileScreen.css'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'

function ProfileScreen() {
    const user = useSelector(selectUser)
    console.log(user, 'userOnProfileScreen')
    return (
        <div className='profileScreen' >
            <Nav />
            <div className='profieScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'></img>
                    <div className='profileScren_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>plans</h3>


                            <button onClick={() => auth.signOut()} className='profileScreen_logout' > Sign Out</button >
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default ProfileScreen