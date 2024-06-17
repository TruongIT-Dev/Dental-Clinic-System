import { useState } from 'react';

const AddNewRoom = () => {
    const [roomNumber, setRoomNumber] = useState('');
    const [roomName, setRoomName] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({
            roomNumber,
            roomName,
            doctorName,
            category
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Thêm Phòng Mới</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="roomNumber" className="form-label">Số Phòng</label>
                    <input
                        type="text"
                        className="form-control"
                        id="roomNumber"
                        placeholder="Nhập số phòng"
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="roomName" className="form-label">Tên Phòng</label>
                    <input
                        type="text"
                        className="form-control"
                        id="roomName"
                        placeholder="Nhập tên phòng"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="doctorName" className="form-label">Tên Bác Sĩ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="doctorName"
                        placeholder="Nhập tên bác sĩ"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Loại Hình Dịch Vụ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        placeholder="Nhập loại hình"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Gửi</button>
            </form>
        </div>
    );
};

export default AddNewRoom;
