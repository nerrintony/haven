"use client";
import { useEffect, useState } from 'react';
import css from './Signup.module.scss';
import Select from 'react-select';
import Validation from '@/utility/Validation';
import Signupapi from '@/app/clients/Signupapi';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState()
    const [firstnameError, setFirstnameError] = useState()
    const [lastnameError, setLastnameError] = useState()
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dobErrorMessage, setDOBErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordErrorMessage1, setPasswordErrorMessage1] = useState('');
    const [passwordErrorMessage2, setPasswordErrorMessage2] = useState('');
    const [selectedOption, setSelectedOption] = useState();
    const [data, setData] = useState()
    const [phoneErrorApi, setPhoneErrorApi] = useState('')
    const [loading, setLoading] = useState(false); // Loading state
    const router = useRouter();
    useEffect(() => {
        dropList();
    }, []);

    const alterEmail = (e) => {
        setEmail(e.target.value);
    };
    const alterDateOfBirth = (e) => {
        setDateOfBirth(e.target.value);
    }
    const alterPassword = (e) => {
        setPassword(e.target.value);
    };

    const alterConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleClick = (selectedOption) => {
        setSelectedOption(selectedOption);
    }
    let currentDate = new Date();
    let userDateOfBirth = new Date(dateOfBirth);
    var datestring = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear()
    const age = currentDate.getFullYear() - userDateOfBirth.getFullYear();

    const dropList = async () => {
        let arr = []
        try {
            const respose = await Signupapi.Dropdown();
            const codes = respose.data.data.forEach(element => {
                arr.push({ 'value': `${element['country_code']}`, 'label': `${element['country_code']}` })
            });
            setData(arr);
            return arr;
        }
        catch (error) {
            console.log(error);
        }
    }
    const submitSignup = async (e) => {
        let fnameError = Validation('first', firstname)
        setFirstnameError(fnameError)
        let lnameError = Validation('last', lastname)
        setLastnameError(lnameError)
        let phError = Validation('phone', phone)
        setPhoneError(phError)
        let passError = Validation('password', password)
        setPasswordErrorMessage1(passError)
        let emailError = Validation('email', email)
        setEmailErrorMessage(emailError);
        let dobErrorm1 = Validation('age', age, dateOfBirth)
        setDOBErrorMessage(dobErrorm1);
        let dobErrorm2 = Validation('confirm', password, confirmPassword)
        setPasswordErrorMessage2(dobErrorm2)
        if (
            !fnameError &&
            !lnameError &&
            !phError &&
            !passError &&
            !emailError &&
            !dobErrorm1 &&
            !dobErrorm2
        ) {
            await Register();
        }
    };
    const Register = async () => {
        try {
            let request = {
                "email": email,
                "firstname": firstname,
                "lastname": lastname,
                "password": password,
                "password_confirmation": confirmPassword,
                "phone": phone,
                "language": '1',
                "dob": datestring
            }
            setLoading(true); // Start loading
            const response = await Signupapi.usersDetails(request);

            if (response.data.status == true) {
                router.push('/success')
                setLoading(false); // Stop loading
            } else {
                if (response.data) {
                    if (response.data.email) {
                        setEmailErrorMessage(response.data.email)
                        setLoading(false); // Stop loading
                    }
                    if (response.data.phone) {
                        setPhoneErrorApi(response.data.phone);
                        setLoading(false); // Stop loading
                    }
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: '#f8f9fa', paddingTop: '.125em', paddingBottom: '.125em' })
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 col-12 pe-lg-5">
                        <div className="ms-lg-3 ms-xl-5 px-lg-5 ms-md-2 mt-lg-5 w-100">
                            <div className={`h-100 d-flex my-3 align-items-center justify-content-center d-lg-none d-block`}>
                                <img src={'assets/logo.png'} className={` rounded-circle img-fluid ${css['logo-img-circle2']}`} />
                            </div>
                            <div className={`${css['text-color']} fs-1 fw-bold mb-3 text-sm-center text-lg-start text-center`}>Sign Up</div>
                            <div className={`${css['text-color']} text-sm-center text-lg-start text-center`}>Please Enter Your Details</div>
                            <div className="my-4"></div>
                            <div className="row">
                                <div className="col">
                                    <label className="py-3">First Name</label>
                                    <input type="text" onChange={(e) => setFirstname(e.target.value)} className={`${css['input-form']} form-control w-100 rounded-3 bg-light py-2 px-3`} required placeholder="First Name" />
                                    {firstnameError && <h6 className='text-danger m-1'>* Enter valid firstname</h6>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="py-3">Last Name</label>
                                    <input type="text" onChange={(e) => setLastname(e.target.value)} className={`${css['input-form']} form-control w-100 rounded-3 bg-light py-2 px-3`} placeholder="Last Name" />
                                    {lastnameError && <h6 className='text-danger m-1'>* Enter valid lastname</h6>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="py-3">Email</label>
                                    <input type="text" name="email" value={email} onChange={(e) => alterEmail(e)} className={`${css['input-form']} form-control w-100 rounded-3 bg-light py-2 px-3`} required placeholder="Email" />
                                    {emailErrorMessage && <div className='mt-1 text-danger'> {emailErrorMessage} </div>}

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="py-3">Phone</label>
                                    <div className="row">
                                        <span className={`${css['select-bg-div']} rounded-3 col-xl-2 col-md-2 col-3`}>
                                            <Select styles={colorStyles} options={data && [data[0]]} defaultInputValue={'91'} value={selectedOption} onChange={(e) => { handleClick(e) }} className={`rounded-3`} />
                                        </span>
                                        <div className='col'>
                                            <input onChange={(e) => { setPhone(e.target.value) }} type="text" className={`${css['input-form']} form-control w-100 rounded-3 bg-light py-2 px-3`} required placeholder="Phone" />
                                        </div>
                                        {phoneError && <h6 className='text-danger m-1'>* Enter valid mobile number</h6>}
                                        {phoneErrorApi && <div className='mt-1 text-danger'> {phoneErrorApi} </div>}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label className='py-2'>Date of Birth</label>
                                    <input type='date' name="dateOfBirth" value={dateOfBirth} onChange={(e) => alterDateOfBirth(e)} className={`${css['input-form']} form-control ${css['date-selector']} w-100 rounded-3 bg-light text-secondary py-2 px-3`} required />
                                    {dobErrorMessage && <div className=' mt-1 text-danger'> {dobErrorMessage} </div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="py-3">Password</label>
                                    <input type="password" name="password" value={password} onChange={(e) => alterPassword(e)} className={`${css['input-form']} form-control w-100 rounded-3 bg-light py-2 px-3`} required placeholder="Password" />
                                    {passwordErrorMessage1 && <div className=' mt-1 text-danger'> {passwordErrorMessage1} </div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="py-3">Confirm Password</label>
                                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => alterConfirmPassword(e)} className={`${css['input-form']} form-control w-100 rounded-3 bg-light py-2 px-3`} required placeholder="Confirm Password" />
                                    {passwordErrorMessage2 && <div className=' mt-1 text-danger'> {passwordErrorMessage2} </div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-lg-3'></div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className=' py-3'>
                                        <div className="d-flex justify-content-center w-100 my-3">
                                            {loading ? ( // Render loading state if loading is true
                                                <button className={`rounded-3 border-0 py-2 ${css['btn-color']} text-white w-100`} disabled>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span className="visually-hidden">Loading...</span>
                                                </button>
                                            ) : ( // Render normal button if loading is false
                                                <button onClick={() => { submitSignup() }} className={`rounded-3 border-0 py-2 ${css['btn-color']} text-white w-100`}>Sign Up</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'></div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='my-2'>
                                        Have an account ?
                                        <a href='/login' className={`${css['login-btn-color']} ${css['text-color']} fw-bold text-decoration-none`}> Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-xl-6 col-lg-4 col-sm-12 p-0 pb-5 d-lg-block d-none ${css['bg-color']}`}>
                        <div className='row h-50 mt-lg-5 mt-0 pt-lg-5 pt-0 m-0'>
                            <div className='col h-100 mt-5 pt-5 m-0'>
                                <div className={`h-100 d-flex align-items-center justify-content-center`}>
                                    <img src={'assets/logo.png'} className={`${css['logo-img-circle1']} rounded-circle img-fluid`} />
                                </div>
                            </div>
                        </div>
                        <div className='row m-0'>
                            <div className={`col p-0  ${css['bg-color']} h-100`}>
                                <p className={`${css['text-color']} ${css['bg-color']} h-100 fs-2 d-none d-lg-block text-center fw-bold fst-italic`}>
                                    "A Piece of Haven on Earth"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup;