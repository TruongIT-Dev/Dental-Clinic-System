// Hình ảnh home
import banner1 from '../../assets/img/home/Banner-uu-dai-nieng-rang-t5.24-pc.webp';
import img1 from '../../assets/img/home/image2-6276.jpeg';
import img2 from '../../assets/img/home/Thumb-Phong-tiet-khuan-02-scaled-555x312.webp';
import img3 from '../../assets/img/home/NKK_thumb-web-4-khac-biet-04-555x312.jpg';
import img4 from '../../assets/img/home/BannerBS-6x-update-04.10.21-scaled-555x312.jpg';


const Home = () => {

    
    return (
        <>
            <div id="Home-content" className="w-100 p-3">   
                <img class="img-fluid" width='max' height='425.89' src={banner1}/>
                <div class="mt-1 position-relative show-desktop hide-mobile" id="customer-comment">
                    <section class="pt-7">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                                <div class="col-12 col-md-6">
                                    <h2 class="mb-3 mt-5 display-5 font-weight-bold">Về Nha Khoa Sức Khỏe</h2>
                                    <p class="lead">Nha Khoa Sức Khỏe - Hệ thống nha khoa uy tín Việt Nam với hơn 30 phòng khám trải dài khắp 6 tỉnh thành trên toàn quốc.</p>
                                    <div class="name" text-align:center >
                                        <p>
                                            <strong><span class="view-more-address"><i class="far fa-hand-point-right"></i></span></strong> <a href="https://nhakhoakim.com/tieu-chuan-chat-luong" title="tiêu chuẩn chất lượng">Chứng nhận chất lượng ISO 9001:2015 Vương Quốc Anh.</a><br></br>
                                            <strong><span class="view-more-address"><i class="far fa-hand-point-right"></i></span></strong> <a href="https://nhakhoakim.com/nha-khoa-kim-thang-hang-top-50-nha-khoa-tot-nhat-the-gioi-tren-bang-xep-hang-gcr.html" title="Đạt chứng nhận GCR Hoa Kỳ">Đạt chứng nhận GCR Hoa Kỳ.</a><br></br>
                                            <strong><span class="view-more-address"><i class="far fa-hand-point-right"></i></span></strong> <a href="https://nhakhoakim.com/healthcare-ecosystem/nha-khoa-kim-cung-uc-singapore-an-do-china-duoc-bao-cao-dien-hinh-tac-dong-chau-a-2021" title="Quỹ Đầu Tư Chính Phủ Singapore">Được chính phủ Singapore đầu tư tài chính.</a><br></br>
                                            <strong><span class="view-more-address"><i class="far fa-hand-point-right"></i></span></strong> <a href="https://nhakhoakim.com/nha-khoa-kim-tu-hao-la-doi-tac-toan-cau-cua-dai-hoc-harvard.html" title="Đối tác toàn cầu của Đại học Harvard">Đối tác toàn cầu của đại học Harvard.</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mt-4 mt-md-0 bg-blue-default p-3 rounded">
                                    <div class="bg-img-hero text-center space-3" >
                                        <img class="img-fluid" width='555' height='425' src={img1}></img>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </section>
                </div>

                <div id="features-news" class="position-relative space-top-2 post u-cubeportfolio block-news">
                <div class="container">
                    <div class="text-center">
                        <h2 class="text-dark mb-5">SỰ KHÁC BIỆT Ở <span class="break-line">NHA KHOA SỨC KHỎE</span></h2>
                    </div>
                        <div class="row">
                                        <article class="col-md-4 col-sm-4 col-lg-4 transition-3d-hover">
                                <div class="card border-0">
                                    <a title="Yêu cầu cho tham quan phòng tiệt trùng nha khoa trước khi quyết định điều trị" href="https://nhakhoakim.com/healthcare-ecosystem/yeu-cau-cho-tham-quan-phong-tiet-trung-truoc-khi-quyet-dinh-dieu-tri-nha-khoa">
                                        <img width="350" height="197" class="card-img img-fluid lazy-load" src={img2} />
                                        <h6 class="h6 py-2 card-text-dark">Yêu cầu cho tham quan phòng tiệt trùng nha khoa trước khi quyết định điều trị</h6>
                                    </a>
                                </div>
                            </article>
                                        <article class="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6 col-index-1">
                                <div class="card border-0">
                                    <a title="4 khác biệt tạo nên Nha Khoa Kim uy tín" href="https://nhakhoakim.com/healthcare-ecosystem/nha-khoa-kim-chuan-quoc-te-moi-khach-hang-la-mot-phong-dieu-tri-rieng-biet">
                                        <img width="350" height="197" class="card-img img-fluid lazy-load" src={img3}/>
                                        <h6 class="h6 py-2 card-text-dark">4 khác biệt tạo nên Nha Khoa Sức Khỏe uy tín</h6>
                                    </a>
                                </div>
                            </article>
                                        <article class="col-md-4 col-sm-4 col-lg-4 transition-3d-hover col-6 col-index-2">
                                <div class="card border-0">
                                    <a title="Những thành tựu Nha Khoa Kim" href="https://nhakhoakim.com/healthcare-ecosystem/nhung-thanh-tuu-nha-khoa-kim-dat-duoc">
                                        <img width="350" height="197" class="card-img img-fluid lazy-load" src={img4}/>
                                        <h6 class="h6 py-2 card-text-dark">Những thành tựu Nha Khoa Sức Khỏe</h6>
                                    </a>
                                </div>
                            </article>
                                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default Home