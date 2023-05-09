interface ROUTE {
    pathname: string;
    path: string;
}

interface Roles {
    head: number;
    child: number;
}

export const HEADER_TITLE_ENUM: { [key: string]: string } = {
    "/": "인트로",
    "/calculator": "점수계산",
    "/calculator/simple": "점수계산 (단순)",
    "/calculator/complex": "점수계산 (부수)",
    "/scanner": "점수스캔",
    "/community": "커뮤니티",
    "/for-no-indicator": "점수표시",
    "/login": "로그인",
};

export const PAN_GRADE: { [key: number]: Roles } = {
    5: { head: 12000, child: 8000 },
    6: { head: 18000, child: 12000 },
    7: { head: 18000, child: 12000 },
    8: { head: 24000, child: 16000 },
    9: { head: 24000, child: 16000 },
    10: { head: 24000, child: 16000 },
    11: { head: 36000, child: 24000 },
    12: { head: 36000, child: 24000 },
    13: { head: 48000, child: 36000 },
};

export const ERROR_EMOJIS: string[] = [
    "😇",
    "😭",
    "🥲",
    "🥹",
    "🧐",
    "😨",
    "😥",
    "🤔",
    "😑",
    "😵‍💫",
];

export const ROUTES: { [key: string]: ROUTE } = {
    INTRO: {
        pathname: "/",
        path: "/",
    },
    CALCULATOR: {
        pathname: "/calculator",
        path: "calculator",
    },
    CALC_INTRO: {
        pathname: "/",
        path: "",
    },
    CALC_SIMPLE: {
        pathname: "/simple",
        path: "simple",
    },
    CALC_COMPLEX: {
        pathname: "/complex",
        path: "complex",
    },
    SCANNER: {
        pathname: "/scanner",
        path: "scanner",
    },
    COMMUNITY: {
        pathname: "/community",
        path: "community",
    },
    FOR_NO_INDICATOR: {
        pathname: "/for-no-indicator",
        path: "for-no-indicator",
    },
    LOGIN: {
        pathname: "/login",
        path: "login",
    },
};
