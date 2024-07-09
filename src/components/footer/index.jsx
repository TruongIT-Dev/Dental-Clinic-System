// Logo
import FormImage from '../../assets/img/Signin/Logo.png'

const FooterComponent = () => {
    return (
        <>
            <div
                className="text-center text-lg-start text-dark"
                style={{ backgroundColor: '#ECEFF1' }}
            >
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <img
                                    src={FormImage}
                                    style={{ width: '100px' }}
                                    alt="logo"
                                />

                                <h6 className="text-uppercase fw-bold">Nha Khoa Sức Khỏe</h6>

                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    Đến với Nha Khoa Sức Khỏe để có một hàm răng trắng sáng rạng ngời, một hàm răng khỏe mạnh và chất lượng. Nha Khoa Sức Khỏe, lựa chọn đáng tin cậy cho mọi nhà.
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">CƠ SỞ</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p><i className="fas fa-home mr-3"></i>46A Võ Vân Ngân, P.Trường Thọ, TP.Thủ Đức</p>
                                <p><i className="fas fa-envelope mr-3"></i>60 Lê Văn Việt, Hiệp Phú, TP.Thủ Đức</p>
                                <p><i className="fas fa-phone mr-3"></i>240 Xô Viết Nghệ Tĩnh, P.21, Q.Bình Thạnh</p>
                                <p><i className="fas fa-print mr-3"></i>270 Quang Trung, P.10, Q.Gò Vấp</p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">HỮU ÍCH</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    <a href="#!" className="text-dark">Tài khoản của bạn</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-dark">Lịch làm việc</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-dark">Đặt lịch khám</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-dark">Trợ giúp</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">LIÊN HỆ</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p><i className="fas fa-home mr-3"></i> + Cơ sở chính: 200 LÊ VĂN VIỆT, THÀNH PHỐ THỦ ĐỨC, HCM</p>
                                <p><i className="fas fa-envelope mr-3"></i> + Email: nhakhoasuckhoe@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 0933 986 097</p>
                                <p><i className="fas fa-print mr-3"></i> + 0154 576 888</p>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default FooterComponent