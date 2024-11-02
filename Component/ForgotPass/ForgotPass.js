import css from './ForgotPass.module.scss';
import React, { useState } from 'react';
import Validation from "@/utility/Validation";
import { useRouter } from 'next/navigation';
import Loginapi from "@/app/clients/Loginapi"
const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [emailErrorMessage1, setEmailErrorMessage1] = useState('')
    const [loading, setLoading] = useState(false); // Loading state
    const router = useRouter();
    const login = async (e) => {
        router.push('/login')
    }
    const submitEmail = async (e) => {
        setEmailErrorMessage1('')
        let emailErrorValue = Validation('email', email)
        setEmailErrorMessage(emailErrorValue)
        if (!emailErrorValue) {
            try {
                let request = {
                    "email": email,
                }
                setLoading(true); // Start loading
                const response = await Loginapi.ForgetPassword(request);
                if (response) {
                    if (response.data.status == true) {
                        setEmailErrorMessage1(response.data.message)
                        setLoading(false);
                    }
                    else {
                        setEmailErrorMessage(response.data.message)
                        setLoading(false); // Start loading
                    }

                }
            } catch (error) {

            }
        }
    }
    return (
        <>
            <div className={`container-fluid ${css['page-height']}`}>
                <div className={`row h-100`}>
                    <div className={`col-lg-12 h-100 m-0`}>
                        <div className={`d-flex h-100 justify-content-center align-items-center`}>
                            <div className='rounded-5 card p-5 text-center'>
                                <div className={`${css['caution-border']} rounded-circle mx-auto`}>
                                    <img src={'assets/caution.png'} className='my-4 w-50 pt-3' />
                                </div>
                                <div className={`${css['text-color']} fs-2 fw-bold my-3`}>
                                    Forgot Password
                                </div>
                                <div className=' my-3'>
                                    Enter you email and we'll send you a link to reset your password
                                </div>
                                <div className=' my-3'>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control rounded-3 bg-light' placeholder='Email' />
                                </div>
                                {emailErrorMessage && <div className='mt-1 text-danger'> {emailErrorMessage} </div>}
                                {emailErrorMessage1 && <div className='mt-1 text-primary'> {emailErrorMessage1} </div>}
                                <div className='my-3'>
                                    {loading ? ( // Render loading state if loading is true
                                        <button className={`text-white rounded-3 border-0 py-2 px-3 ${css['btn-color']}  w-25`} disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                    ) : ( // Render normal button if loading is false
                                        <button className={`text-white rounded-3 border-0 py-2 px-3 ${css['btn-color']}`} onClick={() => { submitEmail() }}>Submit</button>
                                    )}

                                </div>
                                <div className='text-start'>
                                    <span className='mx-0'>Back to</span>
                                    <span className='px-2'>
                                        <a className={`pt-0 fw-bold text-decoration-none fs-5 ${css['text-color']}`} onClick={() => { login() }}>Login</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ForgotPass;