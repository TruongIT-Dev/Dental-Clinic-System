// Animation CSS
import { Card } from 'antd';

import FormAppoinment from './FormAppointment';
// *********************** MAIN FUNCTION ***********************
// *************************************************************
const Appoinment = () => {


    return (
        <>
            <div className="appointment d-flex justify-content-center" style={{ margin: '4rem auto' }}>
                <div style={{width:'60%'}}>
                    <Card>
                        <div className="text-center mx-md-auto mb-lg-5 mb-md-3">
                            <h2 style={{ color: '#f6921e', fontWeight: '500', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                đặt lịch hẹn
                            </h2>
                        </div>

                        {/* Form Inout */}
                        <div>
                            <FormAppoinment />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Appoinment