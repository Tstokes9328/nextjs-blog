//Packages
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Router from 'next/router';
//Components
import Layout from '../components/Layout';

const News = props => {
    //component state
    const [query, setQuery] = useState('javascript');

    //functions
    const handleTextChange = event => {
        setQuery(event.target.value);
        if(event.key === 'Enter'){
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        Router.push(`/news/?searchTerm=${query}`);
    };


    //component layout
    return (
        < Layout >
            <Head>
                <title>News</title>
            </Head>
            <NewsContainer>
                <SearchContainer>
                    <input type="text" placeholder="Search..." onKeyUp={handleTextChange} />
                </SearchContainer>
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
        </Layout >
    )
};

News.getInitialProps = async props => {
    let data;
    let searchQuery = props.query.searchTerm || 'javascript';
    try {
        //fetch the news data from the hn api
        const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
        data = await response.json();
    } catch {
        data = [];
    }
    //return an object to put onto the components props
    return {
        data: data.hits
    };
};

export default News;

//Styled Components
const NewsContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
`

const SearchContainer = styled.div`
    width: 65%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    input {
        font-family: 'Courier New', Courier, monospace;
        height: 30%;
        width: auto;
        border: none;
        outline: none;
        font-size: 16px;
        &:focus {
            border-bottom: 1px solid #F56361;
        }
    }
    img {
        height: 75px;
        width: 15px;
        margin-left: 2%;
        &:hover {
            cursor: pointer;
        }
    }
`

const StoriesContainer = styled.div`
    width: 65%;
    height: 80vh;
`

const StoryContainer = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    a {
        text-decoration: none;
        color: #222324;
        font-size: 20px;
        &:hover {
            color: #F56361;
        }
    }
    h1 {
        font-size: 16px;
        color: #A2A2A4;
    }
`