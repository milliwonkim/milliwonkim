// src/component/button/Button.js

import React from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    font: inherit;
    border: 1px solid #3b0062;
    color: #3b0062;
    background: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    ${props => (props.design === 'danger' && props.mode === 'flat') && css`
        background: rgba(163, 0, 0, 0.3);
        color: #a30000;
    `};
`;

const button = props => {
    return (
        !props.link ? (
            <StyledButton 
                onClick={props.onClick}
                disabled={props.disabled || props.loading}
                type={props.type}
            >
                { props.loading ? 'Loading...' : props.children }
            </StyledButton>
        ) : (
            <Link
                to={props.link}
            >
                {props.children}
            </Link>
        )
    )
}

export default button;