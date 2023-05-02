import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const returnError = () => {
        if (isRouteErrorResponse(error)) {
            return;
        } else if (typeof error === "string") {
            return error;
        } else {
            console.log("unknown error", error);
            return "error";
        }
    };

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{returnError()}</i>
            </p>
        </div>
    );
};

export default Error;
