import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "../../constants";

import CalculateIcon from "@mui/icons-material/Calculate";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import EditIcon from "@mui/icons-material/Edit";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const Footer = () => {
    const location = useLocation();

    return (
        <FooterNavContainer>
            <NavTabList>
                <li
                    className={
                        location.pathname === `/${ROUTES.CALCULATOR}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.CALCULATOR}>
                        {location.pathname === `/${ROUTES.CALCULATOR}` ? (
                            <CalculateIcon />
                        ) : (
                            <CalculateOutlinedIcon />
                        )}

                        <span>점수계산</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === `/${ROUTES.SCANNER}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.SCANNER}>
                        {location.pathname === `/${ROUTES.SCANNER}` ? (
                            <CenterFocusStrongIcon />
                        ) : (
                            <CenterFocusStrongOutlinedIcon />
                        )}

                        <span>점수스캔</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === `/${ROUTES.FOR_NO_INDICATOR}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.FOR_NO_INDICATOR}>
                        {location.pathname === `/${ROUTES.FOR_NO_INDICATOR}` ? (
                            <EditIcon />
                        ) : (
                            <EditOutlinedIcon />
                        )}

                        <span>점수표시</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === `/${ROUTES.COMMUNITY}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.COMMUNITY}>
                        {location.pathname === `/${ROUTES.COMMUNITY}` ? (
                            <ForumIcon />
                        ) : (
                            <ForumOutlinedIcon />
                        )}

                        <span>커뮤니티</span>
                    </Link>
                </li>
            </NavTabList>
        </FooterNavContainer>
    );
};

const FooterNavContainer = styled.div`
    min-width: 320px;
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
        cursor: pointer;
        width: 25%;
        max-width: 96px;
        transition: all 0.2s ease-in-out;
        opacity: 0.3;

        a {
            height: 56px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        span {
            font-size: 13px;
            margin-top: 4px;
        }

        &.active {
            opacity: 1;
        }
    }
`;

export default Footer;
