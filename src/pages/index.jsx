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
                    padding: '0 10rem',
                }}
            >

                {/* Top Header - NavBar */}
                <NavBar />

            </Header>

            {/* CONTENT */}
            <Content
                style={{
                    padding: '0 48px',
                    textAlign: 'center',
                    backgroundImage: `url(${bg})`,
                }}
            >

                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        margin: '0 5rem',
                    }}
                >
                    <Outlet></Outlet>
                </div>
            </Content>

            {/* FOOTER */}
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                <FooterComponent />
            </Footer>
        </Layout>
    );
};
export default PageLayout;