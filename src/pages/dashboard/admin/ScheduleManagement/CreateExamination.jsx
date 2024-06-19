import { Typography } from 'antd';
import FormAppoinment from '../../../appoinment/FormAppointment';

const CreateExamination = () => {

    const { Title } = Typography;

    return (
        <>
            {/* Header */}
            <div>
                <Title level={2}>Tạo lịch khám</Title>
            </div>

            <FormAppoinment />
        </>
    )
}
export default CreateExamination