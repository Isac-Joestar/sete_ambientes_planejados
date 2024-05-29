import CardsFases from '../CardsFases'
import styles from './index.module.css'
function ComoFunciona(){
    return(
        <div className={styles.container}>
            <CardsFases icon='/img/icons/especialista.svg' titulo='Especialista' text='Entre em contato conosco para apresentar seu projeto. Um de nossos profissionais irá atendê-lo.'/>
            <CardsFases icon='/img/icons/apresentar.svg' titulo='Apresentação' text='Seus ambientes serão projetados, orçados e apresentados presencialmente ou online.'/>
            <CardsFases icon='/img/icons/orçamento.svg' titulo='Orçamento' text='Após a aprovação do projeto, você receberá um orçamento detalhado.'/>
            <CardsFases icon='/img/icons/entrega.svg' titulo='Produção e entrega' text='Uma equipe especializada cuidará da entrega e montagem após a produção.'/>
        </div>
    )
}

export default ComoFunciona