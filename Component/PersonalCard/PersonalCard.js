import React, { useState } from "react";
import css from './PersonalCard.module.scss';
const PersonalCard = (props) => {
    return (
        <>
            <div className="container-fluid px-0">
                <div className="row mx-0">
                    <div className="col px-0">
                        <div className="mx-lg-5 m-md-3 m-2 py-2">
                            <h2>
                                Personal Cards
                            </h2>
                        </div>
                        <div className="row my-lg-3 mx-lg-5 mt-md-5 mx-0">
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6 mb-4 mb-xl-0 mb-lg-3">
                                <div className={`${css['card-bg']} card rounded-4`}>
                                    <div className="p-4">
                                        <div className="d-flex justify-content-between">
                                            <div className="border-start">
                                            </div>
                                            <div >
                                                <img src={`assets/wifi.svg`} className={`${css['rotate-wifi']}`} />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between ">
                                            <div>
                                                <div className="mt-md-5 mt-3 text-light">NAME</div>
                                                {props.loading ? (
                                                    <div className="ps-3 pt-1">
                                                        <img src="../assets/loading.gif" alt="Loading" className={`${css['img-size']}`} />
                                                    </div>
                                                ) : (
                                                    <>
                                                        {props.name && <div className="text-light fs-4">{props.name}</div>}
                                                    </>
                                                )}

                                            </div>
                                            <div className="text-end">
                                                <div className="mt-md-5 mt-3 text-light">NUMBER</div>
                                                <div className="text-light fs-4 ">**** **** 1106</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${css['card-footer-bg']} d-flex justify-content-between rounded-bottom-4`}>
                                        <div className="p-3">
                                            {props.loading ? (
                                                <div className="ps-4 py-3">
                                                    <img src="../assets/loading.gif" alt="Loading" className={`${css['img-size']}`} />
                                                </div>
                                            ) : (
                                                <>
                                                    {props.balance && <div className="mt-3 text-light fw-bold fs-4 px-3">${props.balance}</div>}
                                                </>
                                            )}

                                            <div className="text-light px-3 ">Balance</div>
                                        </div>
                                        <div className="text-end p-3">
                                            <img src="assets/mastercard.png" className="w-25 mt-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-xl-6 col-lg-12 col">
                                <div className="card rounded-4">
                                    <div className="p-4 ">
                                        <div className="d-flex justify-content-between">
                                            <div className="border-start">
                                            </div>
                                            <div >
                                                <img src={`assets/wifi.svg`} className={`${css['rotate-wifi']}`} />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between ">
                                            <div>
                                                <div className={`${css['text-color']} mt-md-5 mt-3`}>NAME</div>
                                                {name && <div className=" fs-4">{name}</div>}
                                            </div>
                                            <div className="text-end">
                                                <div className={`${css['text-color']} mt-md-5 mt-3`}>NUMBER</div>
                                                <div className=" fs-4 ">**** **** 1106</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" card-footer d-flex justify-content-between rounded-bottom-4">
                                        <div className="p-2">
                                           {balance && <div className="mt-3 fw-bold fs-4 px-3">${balance}</div>} 
                                            <div className={`${css['text-color']}  px-3 `} >Balance</div>
                                        </div>
                                        <div className="text-end p-3">
                                            <img src="assets/visa.png" className=" w-25 mt-2" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};
export default PersonalCard;