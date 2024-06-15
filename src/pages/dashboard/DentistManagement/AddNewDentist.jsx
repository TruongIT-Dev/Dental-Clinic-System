import '../../../scss/AdminAddNewDentist.css'
import { Typography } from 'antd';

const AddNewDentist = () => {
    const { Title } = Typography;
    return (
        <>
            {/* <div>
                <Title level={2}> Tạo tài khoản Nha sĩ </Title>
            </div> */}
            <div className="wrapper">
                {/* <div className="form-left">
                    <h2 className="text-uppercase">information</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
                    </p>
                    <p className="text">
                        <span>Sub Head:</span>
                        Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
                    </p>
                    <div className="form-field">
                        <input type="submit" className="account" value="Have an Account?" />
                    </div>
                </div> */}
                <form className="form-right">
                    <h2 className="text-uppercase">Đăng ký Nha sĩ</h2>
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label>Họ</label>
                            <input type="text" name="first_name" id="first_name" className="input-field" />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label>Tên</label>
                            <input type="text" name="last_name" id="last_name" className="input-field" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" className="input-field" name="email" required />
                    </div>
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <label>Mật khẩu</label>
                            <input type="password" name="pwd" id="pwd" className="input-field" />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label>Nhập lại mật khẩu</label>
                            <input type="password" name="cpwd" id="cpwd" className="input-field" />
                        </div>
                    </div>
                    <div className="form-field">
                        <input type="submit" value="Đăng ký" className="register" name="register" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddNewDentist