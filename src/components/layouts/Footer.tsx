import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <FooterNavContainer>
            <NavTabList>
                <li>Nav1</li>
                <li>Nav2</li>
                <li>Nav3</li>
                <li>Nav4</li>
            </NavTabList>
        </FooterNavContainer>
    );
};

const FooterNavContainer = styled.div`
    position: fixed;
    z-index: 20;
    bottom: 0;
    width: 100%;
    padding-bottom: env(safe-area-inset-bottom);
    border-top: 1px solid #eee;
`;

const NavTabList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    max-width: 620px;
    height: 56px;

    li {
        width: 25%;
        max-width: 96px;
    }
`;

export default Footer;
