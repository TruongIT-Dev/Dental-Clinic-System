import { Button, Form, Input, Typography } from 'antd';

const { Title } = Typography;

const PatientInfo = () => (
    <>
            <Title level={3}>THÔNG TIN CÁ NHÂN</Title>
            <div className="col-lg-12 pb-5">
            <form className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-fn">First Name</label>
                        <input className="form-control" type="text" id="account-fn" value="Firstname..." required=""/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-ln">Last Name</label>
                        <input className="form-control" type="text" id="account-ln" value="Lastname..." required=""/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-email">E-mail Address</label>
                        <input className="form-control" type="email" id="account-email" value="Email..." disabled=""/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-phone">Phone Number</label>
                        <input className="form-control" type="text" id="account-phone" value="Phone..." required=""/>
                    </div>
                </div>

                <div className="col-12">
                    <hr className="mt-2 mb-3"/>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <button className="btn btn-style-1 btn-primary" type="button" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">Update Profile</button>
                    </div>
                </div>
            </form>
        </div>
    
    </>
);
export default PatientInfo;