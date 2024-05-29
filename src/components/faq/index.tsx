import { MdOutlineArrowDropDown } from "react-icons/md";
import styles from './index.module.css'
import { useState } from "react";

function Faq({text, resp}:{text: string, resp: string}){
    const [state, setState] = useState(false)

    function ChangeResp(){
        setState(!state)
    }
    return(
        <div className={styles.card} onClick={ChangeResp}>
            <div className={styles.content_pergunta}>
                <p>{text}</p>
                <div className={`${state ? styles.on_icon : styles.of_icon }`}><MdOutlineArrowDropDown /></div>
            </div>

            <div className={`${styles.content_resp} ${state ? styles.on_resp : styles.of_resp }`}>
                <p>{resp}</p>
            </div>
        </div>
    )
}

export default Faq