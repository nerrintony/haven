"use client";
import css from './Login.module.scss';
import React, { useState } from "react";
import Loginapi from "@/app/clients/Loginapi";
import { useRouter } from 'next/navigation';
import Validation from "@/utility/Validation";
import LoginCarousel from '../Carousel/LoginCarousel';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [loading, setLoading] = useState(false); // Loading state
    const router = useRouter();

    const handleSubmit = async (e) => {
        setErrorMessage('')
        let emailErrorValue = Validation('email', email)
        setEmailErrorMessage(emailErrorValue)
        let passwordErrorValue = Validation('password', password)
        setPasswordErrorMessage(passwordErrorValue)
        if (!emailErrorValue && !passwordErrorValue) {
            try {
                let request = {
                    "email": email,
                    "password": password
                }
                setLoading(true); // Start loading
                const response = await Loginapi.LoginDetails(request);
                if (response) {
                    if (response.data.status == true) {
                        let token = response.data.token;
                        localStorage.setItem('token', token)
                        router.push('/dashboard')
                        setLoading(false);
                    }
                    else {
                        setErrorMessage('Incorrect username or password');
                        setLoading(false);
                    }
                }
            }
            catch (error) {

                console.log(error)
            }
        }
    }
    const forgetPassword = async (e) => {
        router.push('/forgotpass')
    }
    const signUp = () => {
        router.push('/')
    }
    return (
        <>
            <div className={`container-fluid ${css['page-height']} p-0`}>
                <div className={`row h-100 m-0`}>
                    <div className={`col-lg-6 col-md-12 p-0 h-100 d-md-none d-lg-block d-none`}>
                        <LoginCarousel />
                    </div>

                    <div className={`col-lg-6 col-md-12 ${css['bg-color']}`}>
                        <div className={`d-flex align-items-center h-100`}>
                            <div className='w-100 p-lg-5 py-5'>
                                <div className='text-center pb-5 d-lg-block d-none'>
                                    <img src={'assets/logo.png'} className={`${css['img-opacity']} rounded-circle`} />
                                </div>
                                <div className='text-center pb-5 d-lg-none d-block'>
                                    <img src={'assets/logo.png'} className={`${css['img-opacity2']} rounded-circle`} />
                                </div>
                                <div className={`m-lg-3 m-xl-5 m-md-2`}>
                                    <label className="py-3">Email</label>
                                    <div className="">
                                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`form-control w-100 rounded-3 bg-light py-2 px-3`} required placeholder="Email" />
                                        {emailErrorMessage && <div className='mt-1 text-danger'> {emailErrorMessage} </div>}
                                    </div>
                                    <label className="py-3">Password</label>
                                    <div className="">
                                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`form-control w-100 rounded-3 bg-light py-2 px-3`} required placeholder="Password" />
                                        {passwordErrorMessage && <div className=' mt-1 text-danger'> {passwordErrorMessage} </div>}
                                    </div>
                                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

                                    <div className="row">
                                        <div className="col-4 w-100">
                                            <div className="d-flex justify-content-center py-3 my-5">
                                                <div className="">
                                                    {loading ? ( // Render loading state if loading is true
                                                        <button className={`rounded-3 border-0 py-2 px-5 ${css['btn-color']} text-white w-100`} disabled>
                                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Loading...</span>
                                                        </button>
                                                    ) : ( // Render normal button if loading is false
                                                        <button className={`rounded-3 border-0 py-2 px-5 ${css['btn-color']} text-white w-100`} type="submit" onClick={() => { handleSubmit() }}>Login</button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`d-flex justify-content-between`}>
                                        <div>
                                            <a className={`fw-bold text-decoration-none ${css['text-color']}`} onClick={() => { forgetPassword() }}>
                                                Forgot Password
                                            </a>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='px-2'>
                                                Don't have an account?
                                            </div>
                                            <a className={`text-decoration-none fw-bold ${css['text-color']}`} onClick={(e) => signUp()}>Sign Up</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Login;