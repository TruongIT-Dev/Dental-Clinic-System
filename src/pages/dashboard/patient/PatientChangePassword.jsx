import { Button, Form, Input, Typography } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const { Title } = Typography;

const PatientChangePassword = () => (
    <>
        <Title level={3}>ĐỔI MẬT KHẨU</Title>
        <div className="col-lg-12 pb-5">
            <form className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-pass">New Password</label>
                        <input className="form-control" type="password" id="account-pass"/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-confirm-pass">Confirm Password</label>
                        <input className="form-control" type="password" id="account-confirm-pass"/>
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
export default PatientChangePassword;