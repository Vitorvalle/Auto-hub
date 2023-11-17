import { InputAdv1, InputAdv2, InputAdv3 } from '../input/input';
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
                <InputAdv1 sidebar={false}/>
                <InputAdv2 sidebar={false}/>
                <InputAdv3 sidebar={false}/>
            </div>
            <div className={styles.Line2}>
                <Tabs className={styles.Tags} fullWidth={true}>
                    <Tab className={styles.aaa} title="automatico"></Tab>
                    <Tab className={styles.aaa}title="manuel"></Tab>
                </Tabs>
                <Tabs className={styles.Tags} fullWidth={true}>
                    <Tab className={styles.aaa} title="concessionaria"></Tab>
                    <Tab className={styles.aaa}title="particular"></Tab>
                </Tabs>
                <Select
                className={styles.input}
                label='Cor'
                placeholder="Qualquer cor">
                </Select>
            </div>

            <div className={styles.Buttons}>
                <Button className={styles.SearchButton}>
                Buscar
                </Button>
                <Button className={styles.ClearButton}>
                Limpar
                </Button>
            </div>
        </div>
    )
}