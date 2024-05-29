import styles from "./index.module.css"
import { PiWhatsappLogo } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
function Footer(){
    const date = new Date
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content_contato}>
                    <p><span><LuPhone /></span>00 0 0000 0000</p>
                    <p><span><PiWhatsappLogo /></span>00 0 0000 0000</p>
                </div>
                <p className={styles.copy}>©Copyright {date.getFullYear()} Sete Ambientes Planejados. Todos os direitos reservados.</p>
            </div>

            <p className={styles.by}>feito por <a href="https://portfolio-joestar.vercel.app/" target="_blank">Joestar Code ☆</a></p>
        </footer>
    )
}

export default Footer