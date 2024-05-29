import styles from './index.module.css'
function CardsFases({icon, titulo, text}:{icon: string, titulo: string, text: string}){
    return(
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.content_icon}>
                    <img src={icon} alt="" />
                </div>
                <p className={styles.titulo}>{titulo}</p>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default CardsFases