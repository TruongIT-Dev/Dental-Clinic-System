import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';


const StatisticNumber = () => {

    const revertCard = {
        with: '100px',
        display: 'flex',
        flexDirection: 'column-reverse',
        fontSize: '50px'
    }

    const colCss = {
        with: '186px',
    }

    return (
        <>
            <div>
                <Row style={{ margin: 0, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Col style={{ width: '186px' }}>
                        <Card style={{
                            textAlign: 'center',
                            borderColor: 'purple',
                            borderWidth: 2,
                            borderStyle: 'solid',
                        }}>
                            <Statistic style={revertCard} title="Total students received CV" value={200} />
                        </Card>
                    </Col>
                    <Col style={{ width: '186px' }}>
                        <Card style={{
                            textAlign: 'center',
                            borderColor: 'purple',
                            borderWidth: 2,
                            borderStyle: 'solid',
                        }}>
                            <Statistic style={revertCard} title="Total students interviewed" value={150} />
                        </Card>
                    </Col>
                    <Col style={{ width: '186px' }}>
                        <Card style={{
                            textAlign: 'center',
                            borderColor: 'purple',
                            borderWidth: 2,
                            borderStyle: 'solid',
                        }}>
                            <Statistic style={revertCard} title="Total studented passed" value={150} />
                        </Card>
                    </Col>
                    <Col style={{ width: '186px' }}>
                        <Card style={{
                            textAlign: 'center',
                            borderColor: 'purple',
                            borderWidth: 2,
                            borderStyle: 'solid',
                        }}>
                            <Statistic style={revertCard} title="Total students interning" value={150} />
                        </Card>
                    </Col>
                    <Col style={{ width: '186px' }}>
                        <Card style={{
                            textAlign: 'center',
                            borderColor: 'purple',
                            borderWidth: 2,
                            borderStyle: 'solid',
                        }}>
                            <Statistic style={revertCard} title="Total students interned" value={150} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default StatisticNumber