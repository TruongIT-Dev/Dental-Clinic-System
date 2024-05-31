import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    {
        key: 'sub1',
        label: 'Personal Profile',
        icon: <MailOutlined />,
        children: [

            {
                key: '1',
                label: 'My profile',
            },
            {
                key: '2',
                label: 'Change password',
            },
        ],


    },
    {
        key: 'sub2',
        label: 'Appointment Management',
        icon: <AppstoreOutlined />,
        children: [
            {
                key: '5',
                label: 'List',
            },
            {
                key: '6',
                label: 'Schedule',
            },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {
                        key: '7',
                        label: 'Option 7',
                    },
                    {
                        key: '8',
                        label: 'Option 8',
                    },
                ],
            },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub4',
        label: 'Account management',
        icon: <SettingOutlined />,
        children: [
            {
                key: '9',
                label: 'Option 9',
            },
            {
                key: '10',
                label: 'Option 10',
            },
            {
                key: '11',
                label: 'Option 11',
            },
            {
                key: '12',
                label: 'Option 12',
            },
        ],
    },
];
const SiderMenu = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <Menu
            onClick={onClick}
            style={{
                width: 240,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};
export default SiderMenu;