import css from '../TandC/TandC.module.scss';

const About = () => {
    return (
        <>
            <div className={`container-fluid ${css['bg-color']}`}>
                <div className="row">
                    <div className="col">
                        <div className="m-5">
                            <div className="fs-1 fw-bold text-center my-5">About Us</div>
                            <p className="fs-4 my-4 mx-md-5 px-md-5">
                                Welcome to Safe Haven, a microinsurance company dedicated to providing affordable and accessible insurance products to individuals and communities who are underserved by traditional insurance providers. We believe that everyone deserves access to financial protection, and we are committed to making that a reality.
                            </p>
                            <p className="fs-4 my-4 mx-md-5 px-md-5">
                                Our team of experienced insurance professionals is passionate about helping people protect their assets and achieve their financial goals. We work hard to develop insurance products that meet the unique needs of our customers, and we pride ourselves on delivering exceptional customer service and support. </p>
                            <p className="fs-4 my-4 mx-md-5 px-md-5">
                                At Safe Haven, we believe in transparency, honesty, and integrity. We strive to build long-lasting relationships with our customers, and we are committed to being there for them when they need us most. Whether you are looking for travel insurance, health insurance, or any other type of insurance, we are here to help. </p>
                            <p className="fs-4 my-4 mx-md-5 px-md-5">
                                Thank you for considering Safe Haven for your insurance needs. We look forward to serving you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;