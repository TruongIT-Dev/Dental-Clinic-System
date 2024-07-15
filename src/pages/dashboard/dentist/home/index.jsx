import {
    Button,
    Input,
    Form,
    Card,
    Typography,
} from "antd";
import { useSelector } from "react-redux";
import { DoViewDentistInfoByDentist } from "../../../../apis/api";
import { useEffect, useState } from "react";

const DentistProfile = () => {

    // ***********************************************************************
    //                                Variables
    const userInfo = useSelector(state => state?.account?.user?.user?.user_info);

    const { Title } = Typography;
    const [form] = Form.useForm();
    //************************************************************************


    // ***********************************************************************
    //                                useState

    const [viewDentistInfo, setViewDentistInfo] = useState({});
    //************************************************************************


    // ***********************************************************************
    //                                useEffect

    useEffect(() => {
        fetchViewDentistInfoByDentist(userInfo.id);
    }, [userInfo.id]);


    useEffect(() => {
        if (viewDentistInfo) {
            form.setFieldsValue({
                full_name: viewDentistInfo.full_name,
                email: viewDentistInfo.email,
                phone_number: viewDentistInfo.phone_number,
                date_of_birth: formatDate(viewDentistInfo.date_of_birth),
                gender: viewDentistInfo.gender,
                specialty_name: viewDentistInfo.specialty_name
            });
        }
    }, [viewDentistInfo, form]);

    //************************************************************************


    // ***********************************************************************
    //                                API Function

    const fetchViewDentistInfoByDentist = async (id) => {

        try {
            const APIViewDentistInfo = await DoViewDentistInfoByDentist(id);
            // console.log(APIViewDentistInfo);
            if (APIViewDentistInfo.status === 200) {
                const GetDataViewDentistInfo = APIViewDentistInfo?.data || {};
                setViewDentistInfo(GetDataViewDentistInfo);
                // console.log("viewDentistInfo", viewDentistInfo)
            }
        } catch (error) {
            console.log("Lỗi View Dentist Info: ", error);
        }
    }
    //************************************************************************


    // ***********************************************************************
    //                                other Function

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    };
    //************************************************************************

    return (

        <>
            {/* Header */}
            <div>
                <Title level={2}>Thông tin cá nhân</Title>
            </div>
            <div className="container mx-auto px-4 mt-4">
                <Form
                    form={form}
                    layout="vertical"
                    autoComplete="true"
                    style={{
                        display: 'grid',
                        placeItems: 'center'
                    }}
                >

                    <Card style={{ width: 600 }}>
                        <Form.Item label="Họ và tên" name="full_name">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Email" name="email">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Số điện thoại" name="phone_number">
                            <Input />
                        </Form.Item>


                        <Form.Item label="Ngày sinh" name="date_of_birth" >
                            <Input disabled/>
                        </Form.Item>

                        <Form.Item label="Giới tính" name="gender" >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Chuyên khoa" name="specialty_name">
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Lưu thay đổi
                            </Button>
                        </Form.Item>
                    </Card>


                </Form>

            </div>

        </>
    );
};

export default DentistProfile;
