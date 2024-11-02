import css from './PrevTransaction.module.scss';

const PrevTransaction = () => {
    return (
        <>
            <section>
                <div className="mx-lg-5 mt-5 py-2">
                    <h2 className='mx-2 mb-1'>
                        Last Transactions
                    </h2>
                </div>
                < div className="p-3 mx-md-5 p-md-0 my-0 pb-0 ">
                    <div className={`${css['text-color']} d-flex justify-content-between mt-2`}>
                        <div>
                            10 April,20
                        </div>
                        <div>
                            +$1,840,20
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-lg-3 px-0 col-md-6 col-6 col">
                            <div className='d-flex'>
                                <img src={'assets/card.svg'} className="px-2" />
                                <div className="fw-bold">
                                    Buying New Credit
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 col">
                            <div className='d-flex align-items-center float-end float-md-start me-3'>
                                <div className={`${css['square3']} d-flex mx-3 rounded-1 justify-content-center align-items-center`}>
                                    <div className={``}></div>
                                </div>
                                <span className={`${css['text-color']} `}>
                                    Credit
                                </span>
                            </div>
                        </div>

                        <div className='col-lg-3 mt-md-5 mt-lg-0 mt-3 mb-4 col-6 col col-md-6'>
                            <div className={`${css['text-color']} fw-bold mx-md-3 mx-lg-0`}>
                                10 April,20
                            </div>
                        </div>

                        <div className='col-lg-3 mt-md-5 mt-lg-0 mt-3 mb-4 col-6 col col-md-6'>
                            <div className="d-flex justify-content-between">

                                <div className="fw-bold mx-md-4 ms-auto">
                                    -$140,20
                                </div>
                                <img src={`assets/ellipsis.png`} className={`${css['icon-size']}`} />
                            </div>
                        </div>

                    </div>


                    <div className="row mt-3">
                        <div className="col-lg-3 px-0 col-md-6 col-6 col">
                            <div className='d-flex'>
                                <img src={'assets/enterarrow.svg'} className="px-2" />
                                <div className="fw-bold">
                                    Refund Credit
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 col">
                            <div className='d-flex align-items-center float-end float-md-start me-3'>
                                <div className={`${css['square1']} d-flex mx-3 rounded-1 justify-content-center align-items-center`}>
                                    <div className={`bg-success`}></div>
                                </div>
                                <span className={`${css['text-color']} `}>
                                    Credit
                                </span>
                            </div>
                        </div>

                        <div className='col-lg-3 mt-md-5 mt-lg-0 mt-3 mb-5 col-6 col col-md-6'>
                            <div className={`${css['text-color']} fw-bold mx-md-3 mx-lg-0`}>
                                11 April,20
                            </div>
                        </div>

                        <div className='col-lg-3 mt-md-5 mt-lg-0 mt-3 mb-5 col-6 col col-md-6'>
                            <div className="d-flex justify-content-between">

                                <div className="fw-bold mx-md-4 ms-auto">
                                    <span>
                                        $2480.50
                                    </span>
                                </div>
                                <img src={`assets/ellipsis.png`} className={`${css['icon-size']}`} />

                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-5 d-flex justify-content-center'>
                    <div className='w-100'>
                        <hr className='w-100 my-0'></hr>
                    </div>
                </div>

                < div className="m-md-5 p-3 p-md-0 mb-0 pb-0">
                    <div className={`${css['text-color']} d-flex justify-content-between mt-2`}>
                        <div>
                            12 April,20
                        </div>
                        <div>
                            -$2,130,20
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-3 px-0 col-md-6 col-6 col">
                            <div className='d-flex '>
                                <img src={'assets/person.svg'} className="px-2" />
                                <div className="fw-bold">
                                    Meeting Payment
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-6 col px-0">
                            <div className='d-flex align-items-center float-end float-md-start me-3'>
                                <div className={`${css['square2']} d-flex mx-lg-4 mx-3 rounded-1 justify-content-center align-items-center`}>
                                    <div className={`bg-primary`}></div>
                                </div>
                                <span className={`${css['text-color']} `}>
                                    Payment
                                </span>
                            </div>
                        </div>

                        <div className='col-lg-3 mt-md-5 mt-lg-0 mt-3 mb-5 col-6 col col-md-6'>
                            <div className={`${css['text-color']} fw-bold mx-md-3 mx-lg-0`}>
                                15 April,20
                            </div>
                        </div>

                        <div className='col-lg-3 mt-md-5 mt-lg-0 mt-3 mb-5 col-6 col col-md-6'>
                            <div className="d-flex justify-content-between">

                                <div className="fw-bold mx-md-3 ms-auto">
                                    <span>
                                        -$480.50
                                    </span>
                                </div>
                                <img src={`assets/ellipsis.png`} className={`${css['icon-size']}`} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PrevTransaction;