import styled from "styled-components";

const NonFullPageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
`;

const PageContainer = styled.article`
    background-color: ${(props) => props.theme.bgColor};
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    max-width: 600px;
    margin: 0 auto 16px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export { NonFullPageContainer, PageContainer };
