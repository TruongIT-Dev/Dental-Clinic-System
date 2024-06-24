// Hình ảnh home
import banner1 from '../../assets/img/home/Banner-uu-dai-nieng-rang-t5.24-pc.webp';
import img1 from '../../assets/img/home/image2-6276.jpeg';
import img2 from '../../assets/img/home/Thumb-Phong-tiet-khuan-02-scaled-555x312.webp';
import img3 from '../../assets/img/home/NKK_thumb-web-4-khac-biet-04-555x312.jpg';
import img4 from '../../assets/img/home/BannerBS-6x-update-04.10.21-scaled-555x312.jpg';
import ban1 from '../../assets/img/home/anh1.webp';
import ban2 from '../../assets/img/home/anh2.webp';
import ban3 from '../../assets/img/home/anh3.webp';
import ban4 from '../../assets/img/home/anh4.webp';
import ban5 from '../../assets/img/home/anh5.webp';
import tech1 from '../../assets/img/home/tech1.webp';
import tech2 from '../../assets/img/home/tech2.webp';
import tech3 from '../../assets/img/home/tech3.webp';
import in1 from '../../assets/img/home/in1.webp';
import in2 from '../../assets/img/home/in2.webp';
import in3 from '../../assets/img/home/in3.webp';
import in4 from '../../assets/img/home/in4.webp';
import in5 from '../../assets/img/home/in5.webp';
import in6 from '../../assets/img/home/in6.webp';
import { Input } from 'antd';




const Home = () => {


    return (
        <>
            <div id="Home-content" className="w-100 p-3">
                <img className="img-fluid" width='max' height='425.89' src={banner1} />
                <div className="mt-1 position-relative show-desktop hide-mobile" id="customer-comment">
                    <section className="pt-7">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-12 col-md-6">
                                    <h2 className="mb-3 mt-5 display-5 font-weight-bold">Về Nha Khoa Sức Khỏe</h2>
                                    <p className="lead">Nha Khoa Sức Khỏe - Hệ thống nha khoa uy tín Việt Nam với hơn 30 phòng khám trải dài khắp 6 tỉnh thành trên toàn quốc.</p>
                                    <div className="name">
                                        <p>
                                            <strong><span className="view-more-address"><i className="far fa-hand-point-right"></i></span></strong> <a className='text-decoration-none' href="https://nhakhoakim.com/tieu-chuan-chat-luong" title="tiêu chuẩn chất lượng">Chứng nhận chất lượng ISO 9001:2015 Vương Quốc Anh.</a><br></br>
                                            <strong><span className="view-more-address"><i className="far fa-hand-point-right"></i></span></strong> <a className='text-decoration-none' href="https://nhakhoakim.com/nha-khoa-kim-thang-hang-top-50-nha-khoa-tot-nhat-the-gioi-tren-bang-xep-hang-gcr.html" title="Đạt chứng nhận GCR Hoa Kỳ">Đạt chứng nhận GCR Hoa Kỳ.</a><br></br>
                                            <strong><span className="view-more-address"><i className="far fa-hand-point-right"></i></span></strong> <a className='text-decoration-none' href="https://nhakhoakim.com/healthcare-ecosystem/nha-khoa-kim-cung-uc-singapore-an-do-china-duoc-bao-cao-dien-hinh-tac-dong-chau-a-2021" title="Quỹ Đầu Tư Chính Phủ Singapore">Được chính phủ Singapore đầu tư tài chính.</a><br></br>
                                            <strong><span className="view-more-address"><i className="far fa-hand-point-right"></i></span></strong> <a className='text-decoration-none' href="https://nhakhoakim.com/nha-khoa-kim-tu-hao-la-doi-tac-toan-cau-cua-dai-hoc-harvard.html" title="Đối tác toàn cầu của Đại học Harvard">Đối tác toàn cầu của đại học Harvard.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-4 mt-md-0 bg-blue-default p-3 rounded">
                                    <div className="bg-img-hero text-center space-3" >
                                        <img className="img-fluid" width='555' height='425' src={img1}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div id="features-news" className="position-relative space-top-2 post u-cubeportfolio block-news">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="text-dark mb-5">SỰ KHÁC BIỆT Ở <span className="break-line">NHA KHOA SỨC KHỎE</span></h2>
                        </div>
                        <div className="row">
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover">
                                <div className="card border-0"  >
                                    <a className='text-decoration-none' title="Yêu cầu cho tham quan phòng tiệt trùng nha khoa trước khi quyết định điều trị" href="https://nhakhoakim.com/healthcare-ecosystem/yeu-cau-cho-tham-quan-phong-tiet-trung-truoc-khi-quyet-dinh-dieu-tri-nha-khoa">
                                        <img width="350" height="197" className="card-img img-fluid lazy-load" src={img2} />
                                        <h6 className="h6 py-2 card-text-dark">Yêu cầu cho tham quan phòng tiệt trùng nha khoa trước khi quyết định điều trị</h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6 col-index-1">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="4 khác biệt tạo nên Nha Khoa Kim uy tín" href="https://nhakhoakim.com/healthcare-ecosystem/nha-khoa-kim-chuan-quoc-te-moi-khach-hang-la-mot-phong-dieu-tri-rieng-biet">
                                        <img width="350" height="197" className="card-img img-fluid lazy-load" src={img3} />
                                        <h6 className="h6 py-2 card-text-dark">4 khác biệt tạo nên Nha Khoa Sức Khỏe uy tín</h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6 col-index-2">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Những thành tựu Nha Khoa Kim" href="https://nhakhoakim.com/healthcare-ecosystem/nhung-thanh-tuu-nha-khoa-kim-dat-duoc">
                                        <img width="350" height="197" className="card-img img-fluid lazy-load" src={img4} />
                                        <h6 className="h6 py-2 card-text-dark">Những thành tựu Nha Khoa Sức Khỏe</h6>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="d-flex"><a className="mx-auto btn btn-sm btn-primary btn-wide transition-3d-hover btn-blue-default border-0" href="https://nhakhoakim.com/tin-tuc">Tìm hiểu thêm<span className="fas fa-angle-right ml-2"></span></a></div>
                    </div>
                </div>


                <div id="lastest-events" className="position-relative space-top-1 post u-cubeportfolio block-news">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="text-dark mb-5">Tin tức &amp; sự kiện</h2>

                        </div>

                        <div className="row pt-3 mb-3 bg-light" >
                            <div className="col-sm-12 col-md-6 col-lg-6 p-0">
                                <article className="col-md-12 col-sm-12 col-lg-12 transition-3d-hover col-sm-12">
                                    <a className='text-decoration-none' href="https://nhakhoakim.com/nha-khoa-kim-chuan-bi-khai-truong-hang-loat-phong-kham-moi.html" title="Nha Khoa Kim chuẩn bị khai trương hàng loạt phòng khám mới">
                                        <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                                            <img className="card-img img-fluid lazy-load" width="2500" height="1308" src={ban1} />
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-12 p-0">
                                            <div className="py-2">
                                                <div className="h5 color-yellow-default text-justify">Nha Khoa Kim chuẩn bị khai trương hàng loạt phòng khám mới</div>
                                                <p className="card-text hide-mobile"><small className="text-muted">Hoạt động &amp; Sự Kiện - 24/05/2024</small></p>
                                                <div className="short-description card-text-dark hide-mobile">Giữa bối cảnh Sở Y Tế thanh tra các phòng khám Răng Hàm Mặt nhằm chấn chỉnh hoạt động đúng pháp lý, đúng tiêu chuẩn, có rất nhiều phòng khám...</div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <article className="mb-2 transition-3d-hover col-12">
                                    <a className="row p-0 text-decoration-none" title="Niềng răng công nghệ hiện đại với ưu đãi hấp dẫn hè này" href="https://nhakhoakim.com/nieng-rang-cong-nghe-hien-dai-voi-uu-dai-hap-dan-he-nay.html">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 p-0">
                                            <img className="card-img img-fluid lazy-load" width="555" height="312" src={ban2} />
                                        </div>
                                        <div className="col-7 col-sm-7 col-md-8 col-lg-8 p-0">
                                            <div className="pl-2 pt-2 pr-0">
                                                <h6 className="card-text-dark">Niềng răng công nghệ hiện đại với ưu đãi hấp dẫn hè này</h6>
                                                <p className="card-text hide-mobile"><small className="text-muted">15/05/2024</small></p>
                                            </div>
                                        </div>
                                    </a>
                                </article>

                                <article className="mb-2 transition-3d-hover col-12">
                                    <a className="row p-0 text-decoration-none" title="Hành trình Răng hạnh phúc Nha Khoa Kim trở lại, tiếp tục sứ mệnh nâng cao ý thức chăm sóc răng miệng cộng đồng" href="https://nhakhoakim.com/hanh-trinh-rang-hanh-phuc-nha-khoa-kim-tro-lai.html">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 p-0">
                                            <img className="card-img img-fluid lazy-load" width="555" height="312" src={ban3} />
                                        </div>
                                        <div className="col-7 col-sm-7 col-md-8 col-lg-8 p-0">
                                            <div className="pl-2 pt-2 pr-0">
                                                <h6 className="card-text-dark">Hành trình Răng hạnh phúc Nha Khoa Kim trở lại, tiếp tục sứ mệnh nâng cao ý thức chăm sóc răng miệng cộng đồng</h6>
                                                <p className="card-text hide-mobile"><small className="text-muted">26/04/2024</small></p>
                                            </div>
                                        </div>
                                    </a>
                                </article>

                                <article className="mb-2 transition-3d-hover col-12">
                                    <a className="row p-0 text-decoration-none" title="Thông báo nghỉ Lễ 30/4 &amp; 1/5" href="https://nhakhoakim.com/thong-bao-nghi-le-30-4-1-5.html">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 p-0">
                                            <img className="card-img img-fluid lazy-load" width="555" height="312" src={ban4} />
                                        </div>
                                        <div className="col-7 col-sm-7 col-md-8 col-lg-8 p-0">
                                            <div className="pl-2 pt-2 pr-0">
                                                <h6 className="card-text-dark">Thông báo nghỉ Lễ 30/4 &amp; 1/5</h6>
                                                <p className="card-text hide-mobile"><small className="text-muted">25/04/2024</small></p>
                                            </div>
                                        </div>
                                    </a>
                                </article>

                                <article className="mb-2 transition-3d-hover col-12">
                                    <a className="row p-0 text-decoration-none" title="Thông báo nghỉ lễ Giỗ Tổ Hùng Vương" href="https://nhakhoakim.com/thong-bao-nghi-le-gio-to-hung-vuong.html">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 p-0">
                                            <img className="card-img img-fluid lazy-load" width="555" height="312" src={ban5} />
                                        </div>
                                        <div className="col-7 col-sm-7 col-md-8 col-lg-8 p-0">
                                            <div className="pl-2 pt-2 pr-0">
                                                <h6 className="card-text-dark">Thông báo nghỉ lễ Giỗ Tổ Hùng Vương</h6>
                                                <p className="card-text hide-mobile"><small className="text-muted">15/04/2024</small></p>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                        </div>
                        <div className="d-flex"><a className="mx-auto btn btn-sm btn-primary btn-wide transition-3d-hover btn-blue-default border-0" href="https://nhakhoakim.com/tin-tuc">Tìm hiểu thêm<span className="fas fa-angle-right ml-2"></span></a></div>
                    </div>
                </div>


                <div id="technology-news" className="position-relative space-top-1 post u-cubeportfolio block-news">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="text-dark mb-5">Công nghệ độc quyền tại Nha Khoa Sức Khỏe</h2>
                        </div>
                        <div className="row" >
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-12">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Công nghệ trồng răng Implant SAFEST nhanh tại Nha Khoa Kim" href="https://nhakhoakim.com/cong-nghe-cay-implant-safest-nhanh-tai-nha-khoa-kim.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={tech1} />
                                        <h6 className="h6 py-1 card-text-dark"><span className="hide-mobile">Công nghệ trồng răng Implant SAFEST nhanh tại Nha Khoa Kim</span></h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-12">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Răng sứ thẩm mỹ công nghệ Swift Perfect: Khỏe đẹp hoàn hảo - Bảo tồn răng thật" href="https://nhakhoakim.com/rang-su-tham-my-cong-nghe-swift-perfect-khoe-dep-hoan-hao-bao-ton-rang-that.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={tech2} />
                                        <h6 className="h6 py-1 card-text-dark"><span className="hide-mobile">Răng sứ thẩm mỹ công nghệ Swift Perfect: Khỏe đẹp hoàn hảo - Bảo tồn răng thật</span></h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-12">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Niềng răng công nghệ Optimal Align: Tối ưu hiệu quả - Cười đẹp tự tin" href="https://nhakhoakim.com/nieng-rang-cong-nghe-optimal-align-toi-uu-hieu-qua-cuoi-dep-tu-tin.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={tech3} />
                                        <h6 className="h6 py-1 card-text-dark"><span className="hide-mobile">Niềng răng công nghệ Optimal Align: Tối ưu hiệu quả - Cười đẹp tự tin</span></h6>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="d-flex"><a className="mx-auto btn btn-sm btn-primary text-decoration-none btn-wide transition-3d-hover btn-blue-default border-0" href="https://nhakhoakim.com/tin-tuc">Tìm hiểu thêm<span className="fas fa-angle-right ml-2"></span></a></div>
                    </div>
                </div>


                <div id="lastest-news" className="position-relative space-top-1 post u-cubeportfolio block-news">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="text-dark mb-5">Kiến thức nha khoa</h2>

                        </div>
                        <div className="row">
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Khoang miệng là gì? Cấu tạo và chức năng của khoang miệng" href="https://nhakhoakim.com/khoang-mieng-la-gi.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={in1} />
                                        <h6 className="h6 py-2 card-text-dark">Khoang miệng là gì? Cấu tạo và chức năng của khoang miệng</h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Trẻ Bị Sâu Răng Hàm Có Mọc Lại Không? Vì Sao?" href="https://nhakhoakim.com/tre-bi-sau-rang-ham-co-moc-lai-khong.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={in2} />
                                        <h6 className="h6 py-2 card-text-dark">Trẻ Bị Sâu Răng Hàm Có Mọc Lại Không? Vì Sao?</h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Trồng răng implant all on 4 khi nào? Giá bao nhiêu?" href="https://nhakhoakim.com/trong-rang-implant-all-on-4.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={in3} />
                                        <h6 className="h6 py-2 card-text-dark">Trồng răng implant all on 4 khi nào? Giá bao nhiêu?</h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Sâu răng là gì? Nguyên nhân, dấu hiệu và cách điều trị" href="https://nhakhoakim.com/sau-rang-la-gi.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={in4} />
                                        <h6 className="h6 py-2 card-text-dark">Sâu răng là gì? Nguyên nhân, dấu hiệu và cách điều trị</h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Xịt chống sâu răng cho bé có tốt không? Nên dùng loại nào" href="https://nhakhoakim.com/xit-chong-sau-rang-cho-be.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={in5} />
                                        <h6 className="h6 py-2 card-text-dark">Xịt chống sâu răng cho bé có tốt không? Nên dùng loại nào</h6>
                                    </a>
                                </div>
                            </article>
                            <article className="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6">
                                <div className="card border-0">
                                    <a className='text-decoration-none' title="Lưỡi nổi mụn thịt là dấu hiệu của bệnh gì? Cách điều trị" href="https://nhakhoakim.com/luoi-noi-mun-thit.html">
                                        <img className="card-img img-fluid lazy-load" width="350" height="197" src={in6} />
                                        <h6 className="h6 py-2 card-text-dark">Lưỡi nổi mụn thịt là dấu hiệu của bệnh gì? Cách điều trị</h6>
                                    </a>
                                </div>
                            </article>
                        </div>
                        <div className="d-flex"><a className="mx-auto btn btn-sm btn-primary text-decoration-none btn-wide transition-3d-hover btn-blue-default border-0" href="https://nhakhoakim.com/tin-tuc">Tìm hiểu thêm<span className="fas fa-angle-right ml-2"></span></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home