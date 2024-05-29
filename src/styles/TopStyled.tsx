import styled from "styled-components"

export const StyledContentTop = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h2{
        font-size: var(--size-title);
        font-weight:600;
        color: var(--primary-txt);
    }
    & p{
        font-size: var(--size-subtitle);
        text-align: center;
        font-weight: 500;
        color: var(--secondary-txt);
    } 
`