import React from "react";
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
                        location.pathname === `${ROUTES.CALCULATOR.pathname}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.CALCULATOR.path}>
                        {location.pathname ===
                        `${ROUTES.CALCULATOR.pathname}` ? (
                            <CalculateIcon />
                        ) : (
                            <CalculateOutlinedIcon />
                        )}

                        <span>점수계산</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === `${ROUTES.SCANNER.pathname}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.SCANNER.path}>
                        {location.pathname === `${ROUTES.SCANNER.pathname}` ? (
                            <CenterFocusStrongIcon />
                        ) : (
                            <CenterFocusStrongOutlinedIcon />
                        )}

                        <span>점수스캔</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname ===
                        `${ROUTES.FOR_NO_INDICATOR.pathname}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.FOR_NO_INDICATOR.path}>
                        {location.pathname ===
                        `${ROUTES.FOR_NO_INDICATOR.pathname}` ? (
                            <EditIcon />
                        ) : (
                            <EditOutlinedIcon />
                        )}

                        <span>점수표시</span>
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === `${ROUTES.COMMUNITY.pathname}`
                            ? "active"
                            : ""
                    }
                >
                    <Link to={ROUTES.COMMUNITY.path}>
                        {location.pathname ===
                        `${ROUTES.COMMUNITY.pathname}` ? (
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
    background-color: ${(props) => props.theme.bgColor};
    min-width: 320px;
    position: fixed;
    z-index: 20;
    bottom: 0;
    width: 100%;
    height: 56px;
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
            user-select: none;
            transform: scale(0.92);
            transition: transform 0.2s ease-in-out;
        }

        &.active {
            opacity: 1;
            pointer-events: none;
            span {
                transform: scale(1);
            }
        }
    }
`;

export default Footer;
