import { useState } from 'react';

const AddNewService = () => {
    const [serviceName, setServiceName] = useState('');
    const [servicePicture, setServicePicture] = useState(null);
    const [servicePrice, setServicePrice] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({
            serviceName,
            servicePicture,
            servicePrice,
            serviceDescription
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Thêm Dịch Vụ Mới</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="serviceName" className="form-label">Tên Dịch Vụ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="serviceName"
                        placeholder="Nhập tên dịch vụ"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="servicePicture" className="form-label">Ảnh Dịch Vụ</label>
                    <input
                        type="file"
                        className="form-control"
                        id="servicePicture"
                        onChange={(e) => setServicePicture(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="servicePrice" className="form-label">Giá Dịch Vụ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="servicePrice"
                        placeholder="Nhập giá dịch vụ"
                        value={servicePrice}
                        onChange={(e) => setServicePrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="serviceDescription" className="form-label">Mô Tả Dịch Vụ</label>
                    <textarea
                        className="form-control"
                        id="serviceDescription"
                        rows="3"
                        placeholder="Nhập mô tả dịch vụ"
                        value={serviceDescription}
                        onChange={(e) => setServiceDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gửi</button>
            </form>
        </div>
    );
};

export default AddNewService;
