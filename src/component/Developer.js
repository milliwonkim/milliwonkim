// src/component/Developer.js

import React from 'react';

import styled from 'styled-components';

const StyledDiv1 = styled.div`
    display: flex;
    margin: 10px;
    padding: 20px;
    text-align: center;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    box-shadow: 2px 3px 8px gray;
`;

const StyledP = styled.p`
    font-family: 'Archivo Black', sans-serif;
    color: #353b48;
    letter-spacing: 1px;
    font-size: 30px;
    padding: 5px;
`;

const StyledAnchor = styled.a`
    font-family: 'Archivo Black', sans-serif;
    color: #353b48;
    letter-spacing: 1px;
    font-size: 60px;
    padding: 10px;
    text-decoration: none !important;
    &:hover {
        color: yellow;
        background-color: #34495E;
    }
`;

const developer = () => {
    return(
        <div>
            <StyledDiv1>
                <StyledAnchor 
                    href="https://www.youtube.com/channel/UCXpGYSja7qYXIpPXgWO64hQ">
                    WHO IS THE DEVELOPER
                </StyledAnchor>
                <StyledP>
                    NAME
                </StyledP>
                <p>
                    KIWON KIM
                </p>
    {/* --------------------------------------------------- */}
                <StyledP>
                    MAJOR
                </StyledP>
                <p>
                    <b>Urban Planning & Real Estate</b>
                    <br />
                    CHUNG-ANG UNIVERSITY, SEOUL KOREA
                </p>
    {/* --------------------------------------------------- */}
                <StyledP>
                    JOB
                </StyledP>
                <p>
                    <b>Music</b>
                    <br />
                    <br />
                    Composer
                    <br />
                    <br />
                    <b>What's the Best Song?</b>
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KQco5kHvZsA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>
                    <br />
                    Mixing & Mastering Engineering
                    <br />
                    <br />
                    <b>Computer Science</b>
                    <br />
                    <br />
                    Front-End Developer (React, React Native)
                    <br />
                    Back-End Developer (Node.js, Django)
                </p>
            </StyledDiv1>
        </div>
    )
}

export default developer;