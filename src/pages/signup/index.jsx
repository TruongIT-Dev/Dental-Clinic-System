import { Layout } from 'antd';
import NavBar from '../../components/header/navbar';
import FooterComponent from '../../components/footer';
import SignUpContent from './signup-content';

// Background IMg
import background from '../../assets/img/background.jpg';


const { Header, Content, Footer } = Layout;

const SignUp = () => {
    return (
        <>
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
                        textAlign: 'center',
                        backgroundColor: 'white'
                    }}
                >

                    <div
                        style={{
                            width: '100%',
                            padding: 24,
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundImage: `url(${background})`,
                        }}
                    >
                        <SignUpContent />
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
        </>
    )
}

export default SignUp