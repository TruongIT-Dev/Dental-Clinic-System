import { Layout } from 'antd';
import NavBar from '../components/header/navbar';
import FooterComponent from '../components/footer';
import { Outlet } from 'react-router-dom';

import bg from '../assets/img/background.jpg'

const { Header, Content, Footer } = Layout;


const PageLayout = () => {

    return (
        <Layout>
            {/* HEADER */}
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}
            >

                {/* Top Header - NavBar */}
                <NavBar />

            </Header>

            {/* CONTENT */}
            <Content
                style={{
                    textAlign: 'center',
                    backgroundImage: `url(${bg})`,
                    height: '100%',
                    width: '100%'
                }}
            >
                <div>
                    <Outlet></Outlet>
                </div>
            </Content>

            {/* FOOTER */}
            <FooterComponent />
        </Layout>
    )
}
export default PageLayout