// Hình ảnh Catergory
import bocRangSu from '../../assets/img/catergories/icon-boc-rang-su-1.png';
import cayGepImplant from '../../assets/img/catergories/trong-rang-implant.webp';
import niengRangThamMy from '../../assets/img/catergories/nieng-rang-tham-my.png'
import tayTrangRang from '../../assets/img/catergories/icon-tay-trang-rang-1.png';
import nhoRangKhon from '../../assets/img/catergories/icon-nho-rang-khon-1.png';
import benhLyNhaChu from '../../assets/img/catergories/icon-benh-ly-nha-chu.png';
import dieuTriTuy from '../../assets/img/catergories/dieu-tri-tuy.png';

// CSS
import '../../scss/catergory.css';


const Service = () => {
    return (
        <>
            <div id="service-content" className='w-100 p-3'>
                <div className="w-100 p-3">
                    <div className="container space-2">
                        <h2 className="text-primary font-weight-normal text-center text-uppercase">dịch vụ</h2>
                        <div className="row">
                            {/* Catergory 1 */}
                            <article className="col-md-4 p-2 col-sm-4 col-6">
                                <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                    <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href="#">
                                        <div className="justify-content-center d-flex">
                                            <img className="img-fluid" width='232' height='150' src={bocRangSu} />
                                        </div>
                                        <h4 className='h6 text-body mb-0 text-center py-4'>Bọc răng sứ</h4>
                                    </a>
                                </div>
                            </article>
                            {/* Catergory 2 */}
                            <article className="col-md-4 p-2 col-sm-4 col-6">
                                <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                    <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href="#">
                                        <div className="justify-content-center d-flex">
                                            <img className="img-fluid" width='232' height='150' src={cayGepImplant} />
                                        </div>
                                        <h4 className='h6 text-body mb-0 text-center py-4'>Cấy ghép Implant</h4>
                                    </a>
                                </div>
                            </article>
                            {/* Catergory 3 */}
                            <article className="col-md-4 p-2 col-sm-4 col-6">
                                <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                    <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href="#">
                                        <div className="justify-content-center d-flex">
                                            <img className="img-fluid" width='232' height='150' src={niengRangThamMy} />
                                        </div>
                                        <h4 className='h6 text-body mb-0 text-center py-4'>Niềng răng thẩm mỹ</h4>
                                    </a>
                                </div>
                            </article>
                            {/* Catergory 4 */}
                            <article className="col-md-4 p-2 col-sm-4 col-6">
                                <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                    <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href="#">
                                        <div className="justify-content-center d-flex">
                                            <img className="img-fluid" width='232' height='150' src={tayTrangRang} />
                                        </div>
                                        <h4 className='h6 text-body mb-0 text-center py-4'>Tẩy trắng răng</h4>
                                    </a>
                                </div>
                            </article>
                            {/* Catergory 5 */}
                            <article className="col-md-4 p-2 col-sm-4 col-6">
                                <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                    <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href="#">
                                        <div className="justify-content-center d-flex">
                                            <img className="img-fluid" width='232' height='150' src={nhoRangKhon} />
                                        </div>
                                        <h4 className='h6 text-body mb-0 text-center py-4'>Nhổ răng khôn</h4>
                                    </a>
                                </div>
                            </article>
                            {/* Catergory 6 */}
                            <article className="col-md-4 p-2 col-sm-4 col-6">
                                <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                    <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href="#">
                                        <div className="justify-content-center d-flex">
                                            <img className="img-fluid" width='232' height='150' src={benhLyNhaChu} />
                                        </div>
                                        <h4 className='h6 text-body mb-0 text-center py-4'>Bệnh lý nha chu</h4>
                                    </a>
                                </div>
                            </article>
                            {/* Catergory 7 */}
                            <article className="col-md-4 p-2 col-sm-4 col-6">
                                <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                    <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href="#">
                                        <div className="justify-content-center d-flex">
                                            <img className="img-fluid" width='232' height='150' src={dieuTriTuy} />
                                        </div>
                                        <h4 className='h6 text-body mb-0 text-center py-4'>Điều trị tủy</h4>
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

export default Service