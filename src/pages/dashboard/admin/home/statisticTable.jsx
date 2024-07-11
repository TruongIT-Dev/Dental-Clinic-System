import React from "react";
import { Col, Row, Flex, Progress, Dropdown, Space, Button, Select } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

import { Chart } from "react-google-charts";

const StatisticTable = () => {

    const grapCSS = {
        display: 'flex',
        justifyContent: 'flex-start',
    }

    const btnCss = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%'
    }

    // Chart Column
    const data = [
        ["Element", "Density", { role: "style" }],
        ["Copper", 8.94, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
    ];


    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
   

    return (
        <>
            <Row>
                <Col style={grapCSS} span={12}>
                    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                </Col>

                <Col style={btnCss} span={12}>
                    <Select
                        defaultValue="All Months"
                        style={{
                            width: 150,
                            margin: '0 16px',
                            borderColor: 'purple', // Adjust border color here
                            borderWidth: 2, // Optional: Adjust border width
                            borderStyle: 'solid', // Optional: Specify border style
                        }}
                        onChange={handleChange}
                        options={[
                            { value: 'Jan', label: 'Jan' },
                            { value: 'Feb', label: 'Feb' },
                            { value: 'Mar', label: 'Mar' },
                            { value: 'Apr', label: 'Apr' },
                            { value: 'May', label: 'May' },
                            { value: 'Jun', label: 'Jun' },
                            { value: 'Jul', label: 'Jul' },
                            { value: 'Aug', label: 'Aug' },
                            { value: 'Sep', label: 'Sep' },
                            { value: 'Oct', label: 'Oct' },
                            { value: 'Nov', label: 'Nov' },
                            { value: 'Dec', label: 'Dec' }
                        ]}
                    />

                    <Select
                        defaultValue="Select Year"
                        style={{
                            width: 150,
                            borderColor: 'purple', // Adjust border color here
                            borderWidth: 2, // Optional: Adjust border width
                            borderStyle: 'solid', // Optional: Specify border style
                        }}
                        onChange={handleChange}
                        options={[
                            { value: '2024', label: '2024' },
                            { value: '2023', label: '2023' },
                            { value: '2022', label: '2022' },
                        ]}
                    />
                </Col>
            </Row>


            <br /><br />

            <Row>
                <Col style={grapCSS} span={12}>
                    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                </Col>

                <Col span={12}>
                    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
                </Col>
            </Row>
        </>
    )
}

export default StatisticTable