import React, { useState } from 'react'
import './login.css'
import SignInScreen from './SignInScreen'

function LoginScreen() {
    const [signin, setSignin] = useState(false)
    return (
        <div className='loginScreen'>
            <div className='loginScreeen_background'>
                <img className='loginScreen_backgroundImage' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='netfiximage'>
                </img>
                <button onClick={() => setSignin(true)} className='loginScreen_button' >Sign in</button>
                <div className='loginScreen_gradient'> </div>
            </div>
            <div className='loginScreen_body'>
                {signin ? <SignInScreen /> : (
                    <>
                        <h1>
                            Unlimited films ,TV programmes and more.
                        </h1>
                        <h2>Watch anywhere. cancel at any time </h2>
                        <h3>ready to watch ? Enter your email to create or restart your membership.</h3>
                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='Enter email address' />
                                <button onClick={() => setSignin(true)} className='loginScreen_getstaarted' > GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen