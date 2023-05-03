interface ROUTE {
    pathname: string;
    path: string;
    name: string;
}

export const ROUTES: { [key: string]: ROUTE } = {
    CALCULATOR: {
        pathname: "/calculator",
        path: "calculator",
        name: "점수계산",
    },
    SCANNER: {
        pathname: "/scanner",
        path: "scanner",
        name: "점수스캔",
    },
    COMMUNITY: {
        pathname: "/community",
        path: "community",
        name: "커뮤니티",
    },
    FOR_NO_INDICATOR: {
        pathname: "/for-no-indicator",
        path: "for-no-indicator",
        name: "점수표시",
    },
    LOGIN: {
        pathname: "/login",
        path: "login",
        name: "로그인",
    },
};
