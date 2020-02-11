// src/component/Footer.js

import React from 'react';

import SocialBar from './SocialBar';

import styled from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    align-items: center;
    height: 50px;
    background-color: #34495E;
    padding: 18px;
`;

const footer = () => {
    return (
        <StyledFooter
            style={{
                backgroundColor: '#34495E',
                color: 'white'
            }}
        >
            Copyright &copy; { new Date().getFullYear() } MILLIWONKIM_ON_AIRE
            <SocialBar />
        </StyledFooter>
    )
}

export default footer;