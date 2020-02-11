// src/component/Signup.js

import React from 'react';

import styled from 'styled-components';
import { FaFacebookSquare, FaTwitter, FaGoogle } from 'react-icons/fa'

const StyledDiv1 = styled.div`
    display: flex;
    margin: 10px;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 2px 3px 8px gray;
    height: 99vh;
`;

const StyledDiv2 = styled.div`
    padding: 10px;
`;

const StyledButton = styled.button`
    padding: 20px;
    margin: 15px;
    width: 80%;
    font-weight: bold;
    font-size: 20px;
    color: white;
    background-color: #34495E;
`;

const signup = () => {
    return(
        <StyledDiv1>
            <StyledDiv2>
                <StyledButton>CREATE ACCOUNT</StyledButton>
                <br />
                <br />
                <StyledButton
                    style={{ backgroundColor: '#3b5998' }} 
                ><FaFacebookSquare /> SIGN IN WITH FACEBOOK</StyledButton>
                <br />
                <StyledButton
                    style={{ backgroundColor: '#00aced' }}
                ><FaTwitter /> SIGN IN WITH TWITTER</StyledButton>
                <br />
                <StyledButton
                    style={{ backgroundColor: '#d62d20' }}
                ><FaGoogle /> SIGN IN WITH GOOGLE</StyledButton>
            </StyledDiv2>
        </StyledDiv1>
    )
}

export default signup;