"use client";
import { useEffect, useState } from 'react';
import Signupapi from '@/app/clients/Signupapi';
import { useRouter } from 'next/navigation';
import css from './Verifyemail.module.scss';
const Verifyemail = ({ token }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    useEffect(() => {
        emailVerification();
    }, []);
    const emailVerification = async () => {
        try {
            let request = {
                "token": token
            }
            console.log(token)
            const response = await Signupapi.verifyEmail(request);
            if (response.data.status == true) {
                router.push('/login')
            } else {
                setErrorMessage(response.data.message);
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const signUp = () => {
        router.push('/')
    }
    return (
        <>{errorMessage && (
            <div className={`container-fluid ${css['page-height']}`}>
                <div className={`row h-100`}>
                    <div className={`col-lg-12 h-100`}>
                        <div className={`d-flex h-100 justify-content-center align-items-center`}>
                            <div className={`rounded-5 card p-3 ${css['card-width']}`}>
                                <div className='text-center'>
                                <div>
                                    <img src={`../assets/redcaution.png`} className=' img-fluid w-25 pt-3 ' />
                                </div>
                                <div className='text-danger fw-bold fs-2'>
                                    ERROR!
                                </div>
                                <div >
                                    {errorMessage && <div className={`text-danger fs-3 my-3`}>{errorMessage}</div>}
                                </div>
                                </div>
                                <div className='d-flex ms-auto'>
                                    <div className='px-2'>
                                        Click Here!!
                                    </div>
                                    <a className={`text-decoration-none fw-bold ${css['text-color']}`} onClick={(e) => signUp()}> Signup</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )}
        </>
    )
}
export default Verifyemail;
