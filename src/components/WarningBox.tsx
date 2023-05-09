import React from "react";
import styled from "styled-components";

interface WarningBoxProps {
    emoji: string;
    title: string;
    text: string;
}

const WarningBox = ({ emoji, title, text }: WarningBoxProps) => {
    return (
        <WarningBoxContainer>
            <EmojiIcon>{emoji}</EmojiIcon>
            <PageTitle>{title}</PageTitle>
            <PageText>{text}</PageText>
        </WarningBoxContainer>
    );
};

const WarningBoxContainer = styled.article`
    min-height: 400px;
    height: 100%;
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

export default WarningBox;
