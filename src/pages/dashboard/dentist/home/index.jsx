import {
    Upload,
    Button,
    Input,
    Form,
    Card,
    Row,
    Col,
    Avatar,
    Select,
    Typography,
    Radio,
    DatePicker,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const DentistProfile = () => {

    const { Title } = Typography;

    return (

        <>
            {/* Header */}
            <div>
                <Title level={2}>Thông tin cá nhân</Title>
            </div>
            <div className="container mx-auto px-4 mt-4">
                <Form
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
                            <DatePicker
                                style={{ width: 200 }}
                                format="YYYY-MM-DD"
                                placeholder='YYYY-MM-DD'
                            />
                        </Form.Item>

                        <Form.Item label="Giới tính" name="gender" >
                            <Radio.Group name="radiogroup">
                                <Radio value='Nam'>Nam</Radio>
                                <Radio value='Nữ'>Nữ</Radio>
                                <Radio value='Khác'>Khác</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="Chuyên khoa" name="specialty_id">
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 400,
                                }}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
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
