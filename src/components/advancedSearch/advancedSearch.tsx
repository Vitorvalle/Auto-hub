import InputAdv from '../input/input';
import styles from './styles.module.css'
import { Button, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";

export default function AdvancedSearch() {
    return (
        <div className={styles.SearchBox}>
            <div className={styles.Line}>
                <Select
                className={styles.input}
                label="Marca"
                placeholder="Qualquer marca">
                </Select>

                <Select
                className={styles.input}
                label="Modelo"
                placeholder="Qualquer modelo">

                </Select>
                <Select
                className={styles.input}
                label='Estado'
                placeholder="País inteiro">
                </Select>
            </div>            
            <div className={styles.Line2}>
                <Select
                className={styles.input}
                label="Versao"
                placeholder="Qualquer versao">
                </Select>

                <Select
                className={styles.input}
                label="Tag"
                placeholder="Ex. modificado, rebaixado">

                </Select>
                <Select
                className={styles.input}
                label='Combustivel'
                placeholder="Qualquer">
                </Select>
            </div>
            <div className={styles.Line2}>  
                <InputAdv/>
                <InputAdv/>
                <InputAdv/>
            </div>
            <div className={styles.Line2}>
                <Tabs className={styles.Tags} size='lg'>
                    <Tab key={1} className={styles.aaa} title="automatico"/>
                    <Tab title="manuel"></Tab>
                </Tabs>
            </div>
        </div>
    )
}