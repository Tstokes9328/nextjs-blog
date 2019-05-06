//Packages
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
//Components
import Layout from '../components/Layout';

const News = props => (
    <Layout>

        <Head>
            <title>News</title>
        </Head>

        <NewsContainer>
            <StoriesContainer>
                {
                    props.data.map((story, index) => (
                        <StoryContainer key={index}>
                            <a href={story.url} target="_blank">{story.title}</a>
                            <h1>Author: {story.author}</h1>
                        </StoryContainer>
                    ))
                }
            </StoriesContainer>
        </NewsContainer>

    </Layout>
);

News.getInitialProps = async () => {
    //fetch the news data from the hn api
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=react`);
    const data = await response.json();

    //return an object to put onto the components props
    return {
        data: data.hits
    };
};

export default News;

//Styled Components
const NewsContainer = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
`

const StoriesContainer = styled.div`
    width: 65%;
    height: 100%;
`

const StoryContainer = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    &:hover {
        background: #F0D5D6;
    }
    a {
        text-decoration: none;
        color: #222324;
        font-size: 20px;
    }
    h1 {
        font-size: 16px;
        color: #A2A2A4;
    }
`