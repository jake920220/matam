import React, { useState } from "react";
import styled from "styled-components";

import { Link, useLocation, Outlet } from "react-router-dom";
import { ROUTES } from "../constants";
import { calcUnderMankan } from "../utils/calc";
import { NonFullPageContainer, PageContainer } from "../styles/common";

const Calculator = () => {
    const location = useLocation();
    console.log(location);
    const [value, setValue] = useState("1");
    const point = calcUnderMankan({
        pan: 6,
        bu: 20,
        isHead: false,
        isRon: false,
    });
    console.log(point);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log("value", newValue);
        setValue(newValue);
    };

    const borderClassNameMaker = (): string => {
        if (location.pathname.includes(ROUTES.CALC_SIMPLE.pathname)) {
            return "first active";
        } else if (location.pathname.includes(ROUTES.CALC_COMPLEX.pathname)) {
            return "second active";
        } else {
            return "";
        }
    };

    return (
        <NonFullPageContainer>
            <CalculatorTabMenuContainer>
                <TabNavContainer>
                    <TabNavItem>
                        <Link to={ROUTES.CALC_SIMPLE.path}>간단탭</Link>
                    </TabNavItem>
                    <TabNavItem>
                        <Link to={ROUTES.CALC_COMPLEX.path}>상세탭</Link>
                    </TabNavItem>
                    <TabNavBorder className={borderClassNameMaker()} />
                </TabNavContainer>
            </CalculatorTabMenuContainer>
            <CalculatorPageContainer>
                <Outlet />
            </CalculatorPageContainer>
        </NonFullPageContainer>
    );
};

const TabNavBorder = styled.div`
    position: absolute;
    left: 25%;
    width: 50%;
    bottom: -4px;
    height: 4px;
    background: transparent;
    transition: left 0.3s ease-in-out, bottom 0.3s ease-in-out,
        background-color 2s ease-in-out;

    &.first {
        left: 0;
        border-bottom-left-radius: 4px;
    }
    &.second {
        left: 50%;
        border-bottom-right-radius: 4px;
    }

    &.active {
        bottom: 0;
        background-color: blueviolet;
    }
`;

const TabNavContainer = styled.div`
    position: relative;
    height: 48px;
    display: flex;
    align-items: center;
    overflow: hidden;

    &:after {
        position: absolute;
    }
`;

const TabNavItem = styled.div`
    position: relative;
    width: 50%;
    height: 100%;

    &:first-of-type {
        &:after {
            position: absolute;
            content: "";
            width: 0.1px;
            height: 26px;
            top: 50%;
            right: 0;
            transform: translate(-50%, -50%);
            background-color: #333;
        }
    }

    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const CalculatorTabMenuContainer = styled(PageContainer)``;

const CalculatorPageContainer = styled(PageContainer)`
    padding: 0 16px;
`;

export default Calculator;
