import { Typography } from 'antd';
import FormAppoinment from '../../appoinment/FormAppointment';

const CreateTreatment = () => {

    const { Title } = Typography;

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Tạo lịch điều trị</Title>
            </div>

            <FormAppoinment />
        </>
    )
}
export default CreateTreatment