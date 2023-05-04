import React from "react";

import styled from "styled-components";
import { Navigate, Outlet } from "react-router-dom";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

//todo Kakao login 추가한다면 여기서 redirect 처리
const Root = () => {
    return (
        <>
            <Header />
            <ContentWrap>
                <Outlet />
            </ContentWrap>
            <Footer />
        </>
    );
};

const ContentWrap = styled.div`
    background-color: ${(props) => props.theme.bodyColor};
    width: 100%;
    height: 100%;
    padding-top: 48px;
    padding-bottom: calc(env(safe-area-inset-bottom) + 56px);
`;

export default Root;
