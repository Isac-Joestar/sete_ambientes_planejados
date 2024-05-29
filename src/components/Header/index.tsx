import Btn from "../btn"
import styles from "./index.module.css"
function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.content_header}>
                <div className={styles.logo}>
                    <p>Sete Ambientes Planejados</p>
                </div>
                <ul className={styles.nav}>
                    <li>Home</li>
                    <li>Projetos</li>
                    <li>Sobre</li>
                    <li><Btn text="Orçamento" size={16} bg="var(--special-txt)"/></li>
                </ul>
            </div>
        </header>
    )
}

export default Header