import PaymentChart from '../PaymentChart/PaymentChart';
import css from './Payment.module.scss';

const Payment = (props) => {

    return (
        <>
            <div className='mx-lg-5 m-md-3 m-2 py-3'>
                <h2>
                    Payment Details
                </h2>
            </div>
            <div className='p-2 px-0 px-md-5 px-lg-4'>
                <div className={`text-center`}>
                    <img src={'assets/logo.png'} className={`${css['logo-size']}`} />
                </div>
                <h3 className={`my-4 text-center fw-bold ${css['text-color']}`}>Haven</h3>
                <div className='text-center mb-3 fs-3 fw-bold'>
                    <span>
                        {props.loading ? (
                            <div >
                                <img src="../assets/loading.gif" alt="Loading" className={`${css['img-size']}`} />
                            </div>
                        ) : (
                            <>
                                ${props.balance}
                            </>
                        )}

                    </span>
                </div>

                <div className='row mx-0 my-1'>
                    <div className='col-xl-2 col-lg-4 px-0 col text-sm-start text-center'>
                        <img src={'assets/calendar.png'} className={`${css['icon-size']} mx-sm-5 mx-md-0`} />
                    </div>
                    <div className='col-xl-4 col-lg-4 px-0 col mt-2'>
                        <span>
                            Delivery Time
                        </span>
                    </div>
                    <div className='col-xl-6 col-lg-4 col px-0 mt-2 text-md-end text-start fw-bold'>
                        <span>
                            11 April 2020, 10:00
                        </span>
                    </div>
                </div>
                <div className='row mx-0 my-1'>
                    <div className='col-xl-2 col-lg-4 px-0 col text-sm-start text-center'>
                        <img src={'assets/menu.png'} className={`${css['icon-size']} mx-sm-5 mx-md-0`} />
                    </div>
                    <div className='col-xl-4 col-lg-4 px-0 col mt-2'>
                        <span>
                            Commission
                        </span>
                    </div>
                    <div className='col-xl-6 col-lg-4 col px-0 mt-2 text-md-end text-start fw-bold'>
                        <span>
                            -$54.20
                        </span>
                    </div>
                </div>
                <div className='row mx-0 my-1'>
                    <div className='col-xl-2 col-lg-4 px-0 col text-sm-start text-center'>
                        <img src={'assets/paperclip.png'} className={`${css['icon-size']} mx-sm-5 mx-md-0`} />
                    </div>
                    <div className='col-xl-4 col-lg-4 px-0 col mt-2'>
                        <span>
                            Invoice
                        </span>
                    </div>
                    <div className='col-xl-6 col-lg-4 col px-0 mt-2 text-md-end text-start fw-bold'>
                        <span>
                            XA-2433-BS
                        </span>
                    </div>
                </div>

                <div className='row mx-0 mt-4'>
                    <div className='card rounded-4 '>
                        <div className='row px-4 pt-4'>
                            <p className={`${css['text-color']}`}>
                                Total Spent
                            </p>
                            <p className='fs-3 fw-bold'>
                                $1,240.45
                            </p>
                        </div>
                        <div className='row'>
                            <PaymentChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;