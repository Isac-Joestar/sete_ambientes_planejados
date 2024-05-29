import { StyledContentTop } from "../../styles/TopStyled";
import styles from "./index.module.css"
function Comentarios() {
    return (
        <div className={styles.container}>
            <StyledContentTop>
                <h2>O que os nossos clientes dizem</h2>
            </StyledContentTop>

            <div className={styles.content_comentarios}>
                <div className={styles.card_left} id={styles.pefil_01}>
                    <div className={styles.perfil}>
                        <img src="/img/Perfil/perfil_01.avif" alt="" />
                    </div>

                    <p className={styles.msg}>
                        Estou impressionado com o atendimento excepcional que recebi da equipe. Desde o primeiro contato até a entrega final dos móveis, fui tratado com profissionalismo e cortesia. Eles realmente se preocupam com a satisfação do cliente!
                    </p>
                </div>

                <div className={styles.card_right}>
                    <div className={styles.perfil}>
                        <img src="/img/Perfil/perfil_02.avif" alt="" />
                    </div>

                    <p className={styles.msg}>
                        A eficiência da 7 Móveis Planejados é de tirar o fôlego! Eles cumpriram prazos apertados com facilidade e entregaram móveis de alta qualidade que superaram minhas expectativas. Recomendo vivamente seus serviços a todos que buscam móveis planejados de primeira linha.                    </p>
                </div>

                <div className={styles.card_left}>
                    <div className={styles.perfil}>
                        <img src="/img/Perfil/perfil_03.avif" alt="" />
                    </div>

                    <p className={styles.msg}>
                        A qualidade dos móveis produzidos é simplesmente impecável. Cada peça é cuidadosamente trabalhada e demonstra uma atenção aos detalhes que é incomparável. Estou extremamente satisfeito com o resultado final e definitivamente voltarei para futuros projetos.                    </p>
                </div>

                <div className={styles.card_right}>
                    <div className={styles.perfil}>
                        <img src="/img/Perfil/perfil_04.avif" alt="" />
                    </div>

                    <p className={styles.msg}>
                        Não poderia estar mais feliz com a 7 Móveis Planejados. Desde o momento em que entrei na loja até o momento da entrega, tudo foi perfeito. Os móveis são lindos, duráveis e exatamente o que eu queria para minha casa. Muito obrigado!                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comentarios