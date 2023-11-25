'use client'
import { InputAdv1, InputAdv2, InputAdv3 } from "@/components/input/input";
import { Button, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import styles from "./styles.module.css"


export default function Filter(props: { modelo: string, changeFn: any }) {
    function handleModelChange(event: any) {
        props.changeFn(event.target.value);
    }

    const veiculos = [
        {label:"Fusca", value: "Fusca"},
        {label:"Opala", value: "Opala"},
        {label:"Astra", value: "Astra"},
        {label:"Laika", value: "Laika"},
        {label:"Siena", value: "Siena"},
        {label:"Celta", value: "Celta"},
        {label:"Corsa", value: "Corsa"},
        {label:"Kicks", value: "Kicks"},
        {label:"Corolla", value: "Corolla"},
        {label:"Amarok", value: "Amarok"},
        {label:"Argo", value: "Argo"},
        {label:"Voyage", value: "Voyage"},
        {label:"Polo", value: "Polo"},
        {label:"Veloster", value: "Golf"},
        {label:"Golf", value: "Golf"},
        {label:"HB20", value: "HB20"},
        {label:"Onix", value: "Onix"}
    ]
    return (
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
                placeholder="Qualquer modelo"
                value={props.modelo}
                onChange={handleModelChange}
            >
                {veiculos.map((carro) => (
                    <SelectItem key={carro.value} value={carro.value}>
                        {carro.label}
                    </SelectItem>
                ))}
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

            <InputAdv1 sidebar={true} />
            <InputAdv2 sidebar={true} />
            <InputAdv3 sidebar={true} />

            <Tabs className={styles.Tags} fullWidth={true}>
                <Tab className={styles.aaa} title="automatico"></Tab>
                <Tab className={styles.aaa} title="manuel"></Tab>
            </Tabs>
            <Tabs className={styles.Tags} fullWidth={true}>
                <Tab className={styles.aaa} title="concessionaria"></Tab>
                <Tab className={styles.aaa} title="particular"></Tab>
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
