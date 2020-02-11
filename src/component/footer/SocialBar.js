// src/component/SocialBar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

const StyledDiv = styled.div`
    display: inline-flex;
    padding: 10px;
`;

const StyledAnchor = styled.a`
    color: white;
    font-size: 1.2rem;
`;

class SocialBar extends Component {
    render() {
        return (
            <div>
                <StyledDiv>
                    <StyledAnchor
                        href="https://www.facebook.com/profile.php?id=100012280635498"
                        >
                        <FaFacebookSquare />
                    </StyledAnchor>
                </StyledDiv>

                <StyledDiv>
                    <StyledAnchor
                        href="https://www.instagram.com/milliwonkim_on_aire/"
                    >
                        <FaInstagram />
                    </StyledAnchor>
                </StyledDiv>

                <StyledDiv>
                    <StyledAnchor
                        href="https://www.youtube.com/channel/UCXpGYSja7qYXIpPXgWO64hQ"
                    >
                        <FaYoutube />
                    </StyledAnchor>
                </StyledDiv>
            </div>
        )
    }
}

export default SocialBar;