import styled from "styled-components"

export const StyledSpecialBtn1 = styled.button<{ fontSize: string }>`
    padding: 5px 8px;
    border-radius: 12px;
    background-color: var(--special-txt);
    border: none;
    font-size: ${(props) => props.fontSize};
    font-weight: 400;
    cursor: pointer;

    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    & p{
        display: flex;
        flex-direction: row;
        color: var(--primary-txt) ;
    }

    & p span{
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 20px;
        color: var(--primary-txt) ;
      
    }
`

export const StyledSpecialBtn2 = styled.button`
    padding: 6px 15px;
    border-radius: 10px 0px 0px 10px;
    background-color: var(--special-txt);
    border: none;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
    color: var(--primary-txt);
    
    & p{
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledBtn3 = styled.button`
    padding: 3px 8px;
    border-radius: 7px;
    background-color: var(--primary-bg);
    border: none;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    & p{
        display: flex;
        flex-direction: row;
        color: var(--primary-txt) ;
    }
    & p span{
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 20px;
        color: var(--primary-txt) ;
      
    }
    

   
`