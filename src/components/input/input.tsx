import {Input} from "@nextui-org/react"
import styles from "./styles.module.css"

export default function InputAdv() {
    return(
        <div className={styles.InputBox}>
            <Input
                className={styles.input}
                type="Estado"
                label='Estado'
                placeholder="País inteiro">
                </Input>
                <Input
                className={styles.input}
                type="Estado"
                label='Estado'
                placeholder="País inteiro">
                </Input>
        </div>
    )
} 