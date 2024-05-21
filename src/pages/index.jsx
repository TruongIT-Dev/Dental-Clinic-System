import { Layout } from 'antd';
import NavBar from '../components/header/navbar';
import FooterComponent from '../components/footer';
import { Outlet } from 'react-router-dom';



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
                    backgroundColor: 'white'
                }}
            >

                {/* Top Header - NavBar */}
                <NavBar />

            </Header>

            {/* CONTENT */}
            <Content
                style={{
                    padding: '0 48px',
                    textAlign: 'center'
                }}
            >

                <div
                    style={{
                        padding: 24,
                        minHeight: 380,

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