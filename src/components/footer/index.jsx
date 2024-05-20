

const FooterComponent = () => {
    return (
        <>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">về chúng tôi</h5>
                            <p className="text-center w-100 p-3">Chào mừng đến với Nha Khoa Sức Khỏe - nơi chăm sóc cho nụ cười của bạn! Chúng tôi cam kết cung cấp các dịch vụ nha khoa chất lượng cao, từ chăm sóc định kỳ đến điều trị phức tạp, nhằm mang lại nụ cười tự tin và sức khỏe toàn diện cho mỗi bệnh nhân. Với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi luôn đặt sự thoải mái và hài lòng của bệnh nhân lên hàng đầu. Hãy đồng hành cùng chúng tôi trên hành trình chăm sóc nụ cười và sức khỏe của bạn!</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Trang Chủ</a></li>
                                <li><a href="#">Dịch Vụ</a></li>
                                <li><a href="#">Về Chúng Tôi</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Liên Hệ</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent