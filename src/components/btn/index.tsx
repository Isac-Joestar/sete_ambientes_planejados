import styled from 'styled-components'
function Btn({text, size, bg}: {text: string, size: number, bg: string}){
    const StyledButton = styled.button`
        padding: 4px 15px;
        border-radius: 12px;
        background-color: ${bg};
        border: none;
        font-size: ${size}px;
        font-weight: 400;
        cursor: pointer;
        color: var(--primary-txt);
    `
    return <StyledButton>{text}</StyledButton>
}

export default Btn