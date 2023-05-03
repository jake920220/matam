import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

//todo Kakao login 추가한다면 여기서 redirect 처리
const Root = () => {
    return (
        <>
            <Header />
            <div id="contentWrap">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Root;
