import React from "react";
import styled from "styled-components";

const CalcComplex = () => {
    return (
        <ComplexContainer>
            <EmojiIcon>😭</EmojiIcon>
            <PageTitle>죄송합니다.</PageTitle>
            <PageText>개발 준비중입니다.</PageText>
        </ComplexContainer>
    );
};

const ComplexContainer = styled.article`
    min-height: 400px;
    padding: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const EmojiIcon = styled.span`
    display: block;
    font-size: 80px;
`;

const PageTitle = styled.h2`
    margin-top: 24px;
    font-size: 28px;
`;

const PageText = styled.p`
    margin-top: 16px;
    font-size: 16px;
`;

export default CalcComplex;
