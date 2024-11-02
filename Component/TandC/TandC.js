import css from './TandC.module.scss'

const TandC = () => {
    return (
        <>
            <div className={`container-fluid ${css['bg-color']}`}>
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-center">
                            <div className="m-5">
                                <div className="fs-1 fw-bold  text-center my-5">Terms & Conditions</div>
                                <div className="fs-5">If the policyholder experiences a loss that is covered by the policy, such as a theft or an accident, they will receive up to RS 50,000/- in compensation </div>
                                <div className="my-5 ">
                                    <span className="fs-4 fw-bold">
                                        Eligibility:
                                    </span>
                                    <div>
                                        <span className="my-3 fs-5 m-3 fw-bold">
                                            Age:
                                        </span>
                                        <span className="fs-6 ">The policy may be available to individuals within the age range, 18 to 60 years old.</span>
                                    </div>
                                </div>
                                <div className="my-5 ">
                                    <span className="fs-4 fw-bold">
                                        Coverage:
                                    </span>
                                    <ul>
                                        <li className="my-3 fs-5 ">
                                            <span className="fw-bold m-3">
                                                Health Coverage:
                                            </span>
                                            <span className="fs-6 ">The policy may provide coverage for medical expenses, such as doctor visits, hospitalization, and prescription medications. </span>
                                        </li>
                                        <li className="my-3 fs-5 ">
                                            <span className="fw-bold m-3">
                                                Accident coverage:
                                            </span>
                                            <span className="fs-6 ">The policy may provide coverage for accidents, injuries, or disability resulting from an accident.</span>
                                        </li>
                                        <li className="my-3 fs-5 ">
                                            <span className="fw-bold m-3">
                                                Life  coverage:
                                            </span>
                                            <span className="fs-6 ">The policy may provide coverage for the loss of life due to natural causes or accidental death.
                                            </span>
                                        </li>
                                        <li className="my-3 fs-5 ">
                                            <span className="fw-bold m-3">
                                                Property  coverage:
                                            </span>
                                            <span className="fs-6 ">The policy may provide coverage for loss or damage to property due to fire, theft, or other covered events. </span>
                                        </li>
                                        <li className="my-3 fs-5 ">
                                            <span className="fw-bold m-3">
                                                Crop  coverage:
                                            </span>
                                            <span className="fs-6 ">The policy may provide coverage for loss of crops due to natural disasters or other covered events. </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="fs-4 fw-bold mt-5 mb-3">Claim Process</div>
                                <div>
                                    The Haven team will evaluate the claim and determine whether it meets the requirements for coverage under the policy. This may involve an investigation or review of the documentation provided. If the claim is denied or there is a dispute over the coverage provided, the policyholder or beneficiary may need to appeal the decision or seek legal assistance to resolve the issue.
                                </div>
                                <div className="fs-4 fw-bold mt-5 mb-3">Cancellation Policy</div>
                                <div>
                                    If the policyholder wishes to cancel the policy, they must request cancellation in writing to Haven. This can be done through email.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TandC;