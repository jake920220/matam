import React from "react";

import { Navigate, Outlet } from "react-router-dom";

//todo Kakao login 추가한다면 여기서 처리
const Root = () => {
    return (
        <div>
            <div>header</div>
            <div>
                <Outlet />
            </div>
            <div>footer</div>
        </div>
    );
};

export default Root;
