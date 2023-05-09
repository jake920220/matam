import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import WarningBox from "../components/WarningBox";
import { ERROR_EMOJIS } from "../constants";

const Error = () => {
    const error = useRouteError();
    const returnError = () => {
        console.log(error);
        if (isRouteErrorResponse(error)) {
            return error.data;
        } else if (typeof error === "string") {
            return error;
        } else {
            console.log("Unknown error", error);
            return "Unknown error";
        }
    };

    return (
        <WarningBox
            emoji={ERROR_EMOJIS[Math.floor(Math.random() * 10)]}
            title={
                isRouteErrorResponse(error) ? error.status.toString() : "400"
            }
            text={returnError()}
        />
    );
};

export default Error;
