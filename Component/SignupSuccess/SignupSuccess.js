import css from './SignupSuccess.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const SignupSuccess = () => {
    const [loading, setLoading] = useState(false); // Loading state
    const router = useRouter();
    const ContinueLogin = async (e) => {
        setLoading(true); // Start loading
        router.push('/login')
        setLoading(false); // Stop loading
    }
    return (
        <>
            <div className={`container-fluid ${css['page-height']}`}>
                <div className={`row h-100`}>
                    <div className={`col-lg-12 h-100`}>
                        <div className={`d-flex h-100 justify-content-center align-items-center`}>
                            <div className={`rounded-5 card p-5 text-center ${css['card-width']}`}>
                                <div>
                                    <img src={'assets/tick.png'} className='my-3 img-fluid w-25 pt-3' />
                                </div>
                                <div className={`${css['text-color']} fs-2 fw-bold my-md-3`}>
                                    Successful!
                                </div>
                                <span className=' mt-3 text-start'>
                                    You have successfully signed up to Haven. Please check your email for confirmation email and verify your email address
                                </span>
                                <div className='mt-5    '>
                                    {loading ? ( // Render loading state if loading is true
                                        <button className={`rounded-3 border-0 py-2 px-3 ${css['btn-color']} text-white`} disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                    ) : ( // Render normal button if loading is false
                                        <button className={`rounded-3 border-0 py-2 px-3 ${css['btn-color']} text-white`} onClick={() => { ContinueLogin() }}>Continue</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignupSuccess;