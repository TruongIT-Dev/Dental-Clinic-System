import { useState, useEffect } from 'react';

// Hình ảnh Catergory
// import bocRangSu from '../../assets/img/catergories/icon-boc-rang-su-1.png';
// import cayGepImplant from '../../assets/img/catergories/trong-rang-implant.webp';
// import niengRangThamMy from '../../assets/img/catergories/nieng-rang-tham-my.png'
// import tayTrangRang from '../../assets/img/catergories/icon-tay-trang-rang-1.png';
// import nhoRangKhon from '../../assets/img/catergories/icon-nho-rang-khon-1.png';
// import benhLyNhaChu from '../../assets/img/catergories/icon-benh-ly-nha-chu.png';
// import dieuTriTuy from '../../assets/img/catergories/dieu-tri-tuy.png';

// CSS
import '../../scss/catergory.css';
import { DoViewCategory, DoViewDetailCategory } from '../../apis/api';


const Catergory = () => {

    const [dataCategory, setDataCategory] = useState([]);
    const [idService, setIdService] = useState([]);

    // Lấy API GET Show Tất cả Loại hình dịch vụ
    const FetchCategory = async () => {
        try {
            const res = await DoViewCategory();
            const APICategory = res?.data || [];
            setDataCategory(APICategory);
        } catch (error) {
            console.log(error);
        }
    }
    //React Hook - UseEffect
    useEffect(() => {
        FetchCategory();
    }, []);

    // Lấy Id GET cho từng dịch vụ
    const fetchDetailIdService = async (slug) => {
        try {
            const IdService = await DoViewDetailCategory(slug);
            const APIDetailService = IdService?.data || {};
            setIdService(APIDetailService);
        } catch (error) {
            console.log("Lỗi lấy Id Serivce:", error);
        }
    }

    const handleClickCategory = (slug) => {
        fetchDetailIdService(slug)
    }
    console.log('idService:', idService)

    return (
        <>
            <div className='container' >
                <div id="service-content" className='w-100 p-3'>
                    <div className="w-100 p-3">
                        <div className="container space-2">
                            <h2 className="text-primary font-weight-normal text-center text-uppercase">dịch vụ</h2>
                            <div className="row">
                                {dataCategory.map((data, index) => (
                                    <article key={data.id} // Add key prop here
                                        onClick={() => {
                                            handleClickCategory(data.id);
                                        }}
                                        className="col-md-4 p-2 col-sm-4 col-6">
                                        <div className="d-flex card shadow mb-1 br-0 transition-3d-hover">
                                            <a className="transition-3d-hover text-decoration-none" title="Bọc răng sứ" href={`/loai-hinh-dich-vu/${data.slug}`}>
                                                <div className="justify-content-center d-flex">
                                                    <img className="img-fluid" width='232' height='150' src={data.icon_url} alt="Service Image" />
                                                </div>
                                                <h4 className='h6 text-body mb-0 text-center py-4'>{data.name}</h4>
                                            </a>
                                        </div>
                                    </article>
                                ))}

                            </div>
                        </div>
                    </div>

                </div >
            </div>
        </>
    )
}

export default Catergory