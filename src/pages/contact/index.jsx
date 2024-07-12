import ban3 from '../../assets/img/home/anh3.webp';
import ban1 from '../../assets/img/home/contact1.png';

const Contact = () => {
    return (
        <>
            
            <div className="mt-1 position-relative show-desktop hide-mobile" id="customer-comment">
                    <section className="pt-7">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-md-6 mt-4 mt-md-0 bg-blue-default p-3 rounded">
                                    <div className="bg-img-hero text-center space-3" >
                                        <img className="img-fluid" width='555' height='425' src={ban1}></img>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <h2 className="mb-3 mt-5 display-5 font-weight-bold">Các Cơ Sở Nha Khoa Sức Khỏe</h2>
                                    <p className="lead">+ Cơ sở chính: 200 Lê Văn Việt, Thành Phố Thủ Đức, HCM</p>
                                    <p className="lead">+ 46A Võ Vân Ngân, P.Trường Thọ, TP.Thủ Đức</p>
                                    <p className="lead">+ 60 Lê Văn Việt, Hiệp Phú, TP.Thủ Đức</p>
                                    <p className="lead">+ 240 Xô Viết Nghệ Tĩnh, P.21, Q.Bình Thạnh</p>
                                    <p className="lead">+ 270 Quang Trung, P.10, Q.Gò Vấp</p>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <br></br>
                    <br></br>
                    <div className="d-flex"><a className="mx-auto btn btn-sm btn-primary btn-wide transition-3d-hover btn-blue-default border-0" href="/">Tìm hiểu thêm<span className="fas fa-angle-right ml-2"></span></a></div>
               <br></br>
               <br></br>
                </div>


            <div className="mt-1 position-relative show-desktop hide-mobile" id="customer-comment">
                    <section className="pt-7">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                            
                                    <div className="bg-img-hero text-center space-3" >
                                        <img className="img-fluid" width='555' height='425' src={ban3}></img>
                                    </div>
                             
                                
                                    <h2 className="mb-3 mt-5 display-5 font-weight-bold">Dịch Vụ Đưa Đón Khách Hàng</h2>
                                    
                                    <p className="lead">Nha Khoa Sức Khỏe - Với hệ thống các xe buýt được trang bị tân tiến, hàng loạt xe đưa đón khách hàng từ nhiều địa điểm khác nhau, các tài xế giàu kinh nghiệm sẽ đưa đón bạn tận nơi chỉ với một cuộc hẹn và đặt lịch, khách hàng có thể đến các cơ sở tùy thích của mình, hứa hẹn sẽ mang đến một trải nghiệm tuyệt vời tại Nha Khoa Sức Khỏe.</p>
                                    
                               
                                
                            </div>
                        </div>
                    </section>
                    <br></br>
                    <br></br>
                    <div className="d-flex"><a className="mx-auto btn btn-sm btn-primary btn-wide transition-3d-hover btn-blue-default border-0" href="/">Tìm hiểu thêm<span className="fas fa-angle-right ml-2"></span></a></div>
               <br></br>
               <br></br>
                </div>
        </>
    )
}

export default Contact