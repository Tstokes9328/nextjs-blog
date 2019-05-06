//Packages
import Head from 'next/head';
import styled from 'styled-components';

//Components
import Layout from '../components/Layout';

//Component
const Index = () => (
    <Layout>
        <Head>
            <title>Home</title>
        </Head>
        <HomeContainer>
            
        </HomeContainer>
    </Layout>
)

export default Index;

//Styled Components
const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
`