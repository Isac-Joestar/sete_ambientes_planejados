import { StyledContentTop } from "../../styles/TopStyled";
import { StyledSpecialBtn2 } from "../../styles/btnStyled"
import Project from "../project";
import styles from "./index.module.css"

import { MdPlayArrow } from "react-icons/md";

function Projetos() {
    return (
        <div className={styles.container}>
            <StyledContentTop>
                <h2>Projetos</h2>
                <p>Design personalizado para cada cômodo da sua casa, <br /> criando ambientes únicos e funcionais.</p>
            </StyledContentTop>
           
            <div className={styles.content_btn}>
                <StyledSpecialBtn2><p>Ver todos os projetos</p> <MdPlayArrow /></StyledSpecialBtn2>
            </div>
            <div className={styles.content_projects}>
                <Project text="Ver mais salas" bg="/img/projects/sala.avif" />
                <Project text="Ver mais cosinhas" bg="/img/projects/cosinha.avif" />
                <Project text="Ver mais quartos" bg="/img/projects/quarto.avif" />
                <Project text="Ver mais banheiros" bg="/img/projects/banheiro.avif" />
                <Project text="Ver mais projetos home office" bg="/img/projects/homeOffice.avif" />
                <Project text="Ver mais quartos infantis" bg="/img/projects/quartoInfantil.avif" />
            </div>
        </div>)
}

export default Projetos