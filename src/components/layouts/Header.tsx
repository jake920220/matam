import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { ROUTES, HEADER_TITLE_ENUM } from "../../constants";

import Drawer from "./Drawer";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Simulate } from "react-dom/test-utils";
// import DarkModeSwitch from "../common/DarkModeSwitch";

const Header = () => {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer =
        (drawerOpen: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setDrawerOpen(drawerOpen);
        };

    return (
        <HeaderNavContainer>
            <DrawerBtnWrap>
                <button onClick={toggleDrawer(true)}>
                    <MenuOutlinedIcon />
                </button>
            </DrawerBtnWrap>

            <HeaderTitle>{HEADER_TITLE_ENUM[location.pathname]}</HeaderTitle>

            <Drawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
        </HeaderNavContainer>
    );
};

const HeaderNavContainer = styled.div`
    background-color: ${(props) => props.theme.bgColor};
    min-width: 320px;
    position: fixed;
    z-index: 20;
    height: 48px;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DrawerBtnWrap = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;

    button {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const HeaderTitle = styled.h1`
    font-size: 16px;
    font-weight: 500;
    user-select: none;
`;

export default Header;
