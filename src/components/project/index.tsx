
import { StyledBtn3 } from "../../styles/btnStyled"
import styles from "./index.module.css"
import styled from "styled-components";

import { MdPlayArrow } from "react-icons/md";

function Project({ text, bg }: { text: string, bg: string }) {
    const StyledProject = styled.div`
        height: 220px; 
        width: 31%;   
        overflow: hidden;
        background-color: antiquewhite;
        border-radius: 6px;

        position: relative;
 
        background-image: url(${bg});
        background-color: #cccccc; 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
    `
    return (
        <StyledProject>  
            <div className={styles.gradient}></div>

            <div className={styles.content_btn}>
                <StyledBtn3><p>{text} <span><MdPlayArrow /></span></p> </StyledBtn3>
            </div>
        </StyledProject>
        
    )
}

export default Project