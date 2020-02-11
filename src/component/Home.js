// src/component/Landing.js

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home1 from '../image/home1.jpg';
// import Home1 from '../image/home1.mp4';

const StyledDiv1 = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20rem;
    align-items: stretch;
    text-shadow: 2px 3px 3px gray;
    text-align: center;
    font-size: 4rem;
`;

const StyledDiv2 = styled.div`
    background-image: url(${Home1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    font-size: 3rem;
    color: #FFFFFF;
    font-family: HelveticaNeue-Bold;
    align-items: center;
    padding: 20px;
`;

const landing = () => {
    return (
        <StyledDiv2> 
            <StyledDiv1>
                Milliwonkim's Words
            </StyledDiv1>
        </StyledDiv2>
    )
}

export default landing;