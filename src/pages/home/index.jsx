import { Layout } from 'antd';
import NavBar from '../../components/header/navbar';
import FooterComponent from '../../components/footer';



const { Header, Content, Footer } = Layout;


const Home = () => {
    
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
                    textAlign:'center'
                }}
            >
                
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        
                    }}
                >
                    Content
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
export default Home;