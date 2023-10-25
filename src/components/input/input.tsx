import {Input} from "@nextui-org/react"
import styles from "./styles.module.css"

export function InputAdv1() {
    return(
        <div className={styles.InputBox}>
            <Input
                className={styles.input}
                type="Ano"
                label='Ano min'
                placeholder="Ex. 1900">
                </Input>
                <Input
                className={styles.input}
                type="Ano"
                label='max'
                placeholder="Ex. 2023">
                </Input>
        </div>
    )
} 

export function InputAdv2() {
    return(
        <div className={styles.InputBox}>
            <Input
                className={styles.input}
                type="Estado"
                label='Preço min'
                placeholder="Ex. 5000">
                </Input>
                <Input
                className={styles.input}
                type="Estado"
                label='max'
                placeholder="Ex. 120000">
                </Input>
        </div>
    )
} 

export function InputAdv3() {
    return(
        <div className={styles.InputBox}>
            <Input
                className={styles.input}
                type="Estado"
                label='Quilometragem min'
                placeholder="Ex. 0">
                </Input>
                <Input
                className={styles.input}
                type="Estado"
                label='  max '
                placeholder="Ex. 200000">
                </Input>
        </div>
    )
} 