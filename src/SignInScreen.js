import React, { useRef } from 'react'
import './SignInScreen.css'
import { auth } from './firebase'

function SignInScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword
            (emailRef.current.value,
                passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser)
            }).catch((error) => {
                alert(error.message)
            })
    }
    const signin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword
            (emailRef.current.value,
                passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser, 'insignin')
            }).catch((error) => {
                alert(error.message)
            })
    }
    //First Register Then Signin 
    return (
        <div className='signupScreen'>
            <form>
                <h1> Sign In </h1>
                <input ref={emailRef} placeholder='Email' type='email'></input>
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button type='submit' onClick={signin} >Sign In</button>
                <h4 >
                    <span className='signupScreen_grey'> New to Netflix?</span>
                    <span onClick={register} className='signUpScreen_link' > Sign Up now </span>

                </h4>
            </form>
        </div>
    )
}

export default SignInScreen