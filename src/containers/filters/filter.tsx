import { InputAdv1, InputAdv2, InputAdv3 } from "@/components/input/input";
import { Button, Select, Tab, Tabs } from "@nextui-org/react";
import styles from "./styles.module.css"


export default function Filter() {
    return(
        <div className={styles.Filters}>
            <h2 className={styles.head}>Filtros de pesquisa</h2>
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

                <InputAdv1 sidebar={true}/>
                <InputAdv2 sidebar={true}/>
                <InputAdv3 sidebar={true}/>

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

                <Button className={styles.ClearButton}>
                Limpar
                </Button>
                <Button className={styles.SearchButton}>
                Buscar
                </Button>
        </div>
    )
}