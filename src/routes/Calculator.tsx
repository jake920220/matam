import React, { useState } from "react";
import styled from "styled-components";

import { Link, useLocation, Outlet } from "react-router-dom";
import { ROUTES } from "../constants";
import { calcUnderMankan } from "../utils/calc";
import { NonFullPageContainer, PageContainer } from "../styles/common";

const Calculator = () => {
    const [value, setValue] = useState("1");
    calcUnderMankan({ pan: 3, bu: 40 });
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log("value", newValue);
        setValue(newValue);
    };

    return (
        <NonFullPageContainer>
            <CalculatorTabMenuContainer>
                <TabNavContainer>
                    <TabNavItem>
                        <Link to={ROUTES.CALC_SIMPLE.path}>심플</Link>
                    </TabNavItem>
                    <TabNavItem>
                        <Link to={ROUTES.CALC_COMPLEX.path}>컴플렉스</Link>
                    </TabNavItem>
                </TabNavContainer>
            </CalculatorTabMenuContainer>
            <CalculatorPageContainer>
                <Outlet />
            </CalculatorPageContainer>
        </NonFullPageContainer>
    );
};

const TabNavContainer = styled.div`
    position: relative;
    height: 48px;
    display: flex;
    align-items: center;

    &:after {
        position: absolute;
    }
`;

const TabNavItem = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-of-type {
        &:after {
            position: absolute;
            content: "";
            width: 0.1px;
            height: 32px;
            top: 50%;
            right: 0;
            transform: translate(-50%, -50%);
            background-color: #333;
        }
    }
`;

const CalculatorTabMenuContainer = styled(PageContainer)``;

const CalculatorPageContainer = styled(PageContainer)`
    padding: 0 16px;
`;

export default Calculator;
