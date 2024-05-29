import { StyledSpecialBtn1 } from '../../styles/btnStyled'
import styles from './index.module.css'
import { MdPlayArrow } from "react-icons/md"

function Sobre(){
    return(
        <div className={styles.container}>
            <div className={styles.content_text}>
                <h3>Sete Ambientes Planejados</h3>
                <p className={styles.paragrafo}>Sua escolha em móveis planejados de qualidade em Brasília. Com mais de 3400 projetos entregues, focamos em oferecer soluções excepcionais para transformar sua casa. Priorizamos qualidade em cada peça, garantindo durabilidade e funcionalidade. Nossa equipe dedicada oferece atendimento excepcional em todo o processo, desde a consulta até a entrega. Confie na [Nome da Empresa] para criar ambientes deslumbrantes que atendam às suas necessidades.</p>
                <StyledSpecialBtn1 fontSize="17px">
                    <p>Faça seu orçamento <span><MdPlayArrow/></span> </p>    
                </StyledSpecialBtn1>
            </div>
            <div className={styles.content_img}>
                <img src="/img/bg_4.avif" alt="" />
            </div>
        </div>
    )
}

export default Sobre