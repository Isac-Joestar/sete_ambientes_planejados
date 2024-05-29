import { StyledContentTop } from "../../styles/TopStyled"
import Faq from "../faq"
import styles from './index.module.css'

function Perguntas(){
    return(
        <div className={styles.container}>
            <StyledContentTop>
                <h2>Perguntas frequentes</h2>
            </StyledContentTop>
            <div className={styles.content_perguntas} >
                <Faq text="Quanto tempo para entregar?" resp="sla brother"/>
                <Faq text="Como funciona o processo de design e personalização dos móveis planejados?" resp="sla brother"/>
                <Faq text="Quais materiais são utilizados na fabricação dos móveis planejados?" resp="sla brother"/>
                <Faq text="Como faço para solicitar um orçamento para meus móveis planejados?" resp="sla brother"/>
                <Faq text="Quanto tempo leva para fabricar e instalar os móveis planejados?" resp="sla brother"/>
                <Faq text="Posso ver amostras de materiais e acabamentos antes de tomar uma decisão?" resp="sla brother"/>
                <Faq text="Vocês oferecem garantia para os móveis planejados?" resp="sla brother"/>
                <Faq text="É possível fazer alterações no projeto após o início da fabricação?" resp="sla brother"/>
            </div>
        </div>
    )
}

export default Perguntas