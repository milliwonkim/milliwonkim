// src/Article.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlusPost from './feed/post/plusPost';

import styled from 'styled-components';
import Paginator from './pagination/Paginator';
import Feed from './feed/Feed';

const StyledDiv1 = styled.div`
  display: flex;
  margin: 10px;
  padding: 0 20px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 3px 8px gray;
  &:after {
    display: table;
    clear: both;
    content: '';
  }
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
`;

const StyledDiv2 = styled.div`
  font-family: Bowlby One SC, cursive;
  font-size: 3rem;
  margin: 20px;
  color: #34495E;
  text-shadow: 2px 3px 0 #dcdde1;
`;

const StyledFeed = styled(Feed)`
  &:active {
    color: yellow;
    text-shadow: 2px 3px 8px gray;
    background-color: #34495E
  }
`;

const Article = () => {


  const [ posts, setPosts ] = useState([]);
  /**
   * this is same thing as
   *
   * state = {
   *  posts: []
   * }
   */
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

// Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
  const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
  }


  return (
      <StyledDiv1>
          <StyledDiv2>ARTICLE {currentPage}</StyledDiv2>
          <PlusPost />
          <br />
          <StyledFeed
            posts={currentPosts}
            loading={loading}
          />
          <Paginator
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
      </StyledDiv1>
    );
  }

export default Article;