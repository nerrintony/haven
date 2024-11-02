import css from './ResetPass.module.scss';
import React, { useState } from 'react';
import Validation from '@/utility/Validation';
import { useRouter } from 'next/navigation';
import Loginapi from '@/app/clients/Loginapi';
const ResetPass = ({ token }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordErrorMessage1, setPasswordErrorMessage1] = useState('');
    const [passwordErrorMessage2, setPasswordErrorMessage2] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const router = useRouter();
    const alterPassword = (e) => {
        setPassword(e.target.value);
    };
    const alterConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const login = async (e) => {
        setLoading(true); // Start loading
        router.push('/login')
        setLoading(false);
    }
    const submitPassword = async (e) => {
        setPasswordErrorMessage1('');
        setPasswordErrorMessage2('');
        let passError = Validation('password', password)
        setPasswordErrorMessage1(passError)
        let passError2 = Validation('confirm', password, confirmPassword)
        setPasswordErrorMessage2(passError2)
        if (!passError && !passError2) {
            try {
                let request = {
                    "token": token,
                    "password": password,
                    "password_confirmation": confirmPassword
                }
                console.log(token)
                const response = await Loginapi.ResetPassword(request);
                if (response.data.status == true) {
                    setSuccessMessage(response.data.message)
                } else {
                    setPasswordErrorMessage2(response.data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <>
            <div className={`container-fluid ${css['page-height']}`}>
                <div className={`row h-100`}>
                    <div className={`col-lg-12 h-100 m-0`}>
                        <div className={`row h-100 justify-content-center align-items-center`}>
                            <div className='col-xl-4 col-lg-6 col-md-8 col'>
                                <div className='rounded-5 card p-5'>
                                    <div className={`${css['caution-border']} text-center rounded-circle mx-auto`}>
                                        <img src={'../assets/caution.png'} className='my-4 w-50 pt-3' />
                                    </div>
                                    <div className={`${css['text-color']} fs-2 fw-bold my-3`}>
                                        Reset Password
                                    </div>

                                    <div className=' my-3'>
                                        <label className='my-2'>Password</label>
                                        <input type='password' name="password" value={password} onChange={(e) => alterPassword(e)} className='form-control rounded-3 px-3 bg-light' placeholder='Password' />
                                        {passwordErrorMessage1 && <div className=' mt-1 text-danger'> {passwordErrorMessage1} </div>}
                                    </div>
                                    <div className=' my-3'>
                                        <label className='my-2'>Confirm Password</label>
                                        <input type='password' name="confirmPassword" value={confirmPassword} onChange={(e) => alterConfirmPassword(e)} className='form-control rounded-3 px-3 bg-light' placeholder='Confirm Password' />
                                        {passwordErrorMessage2 && <div className=' mt-1 text-danger'> {passwordErrorMessage2} </div>}
                                        {successMessage && <div className='mt-1  text-primary'>{successMessage}</div>}

                                    </div>
                                    <div className='my-3 text-center'>
                                        <button className={`text-white rounded-3 border-0 px-3 py-2 ${css['btn-color']}`} onClick={() => { submitPassword() }}>Submit</button>
                                    </div>
                                    <div className='text-start'>
                                        <span className='mx-0'>Back to</span>
                                        <span className='mx-0'>
                                            {loading ? ( // Render loading state if loading is true
                                                <button className={`fw-bold btn fs-5 ${css['text-color']}`} disabled>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Loading...</span>
                                                </button>
                                            ) : ( // Render normal button if loading is false
                                                <a className={`fw-bold text-decoration-none px-2 fs-5 ${css['text-color']}`} onClick={() => { login() }}>Login</a>
                                            )}

                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ResetPass;