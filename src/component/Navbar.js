// src/component/Navbar.js

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

const StyledDiv = styled.div`
    display: inline-flex;
    align-items: center;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const StyledDiv2 = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
    background-color: #34495E;
    box-shadow: 0 3px 3px gray;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const StyledNavLink = styled(NavLink)`
    display: inline-flex;
    font-family: 'Hammersmith One', sans-serif;
    font-size: 17px;
    text-decoration: none;
    margin: 0 3px ;
    color: white;
    &:hover {
        color: yellow;
        text-decoration: none;
        text-stroke: white;
    }
`;

const activeStyle = {
    color: 'yellow',
    fontFamily: 'Bowlby One SC, cursive',
    textShadow: '2px 3px 0 gray',
    fontSize: '20px'
};

return (
    <StyledDiv2>
        <StyledDiv>
            <StyledNavLink
                to="/"
                exact
                style={{
                    'fontSize': '30px',
                    'fontFamily': 'Bowlby One SC, cursive',
                    'textShadow': '3px 4px 0 gray'
                }}
                activeStyle={{'color': 'yellow'}}
            >
                MILLIWONKIM ON AIRE
            </StyledNavLink>
        </StyledDiv>
        <StyledDiv>
            <StyledNavLink
                to="/whoisthedeveloper"
                activeStyle={activeStyle}
            >
                DEVELOPER
            </StyledNavLink>
        </StyledDiv>
        <StyledDiv>
            <StyledNavLink
                to="/article"
                activeStyle={activeStyle}
            >
                ARTICLE
            </StyledNavLink>
        </StyledDiv>
        <StyledDiv>
            <StyledNavLink
                to="/login"
                activeStyle={activeStyle}
            >
                LOGIN
            </StyledNavLink>
        </StyledDiv>
    </StyledDiv2>
    )
}