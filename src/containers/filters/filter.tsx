'use client'
import { InputAdv1, InputAdv2, InputAdv3 } from "@/components/input/input";
import { Button, Input, Select, SelectItem, Tab, Tabs } from "@nextui-org/react";
import styles from "./styles.module.css"
import { estados, marcas, modelos } from "./data";
import { useRouter } from "next/navigation";
import { useState } from "react";

const query = {
    modelo: "",
    marca: "",
    estado: "",
    precoMin: "0",
    precoMax: "999999999999",
    anoMin: "0",
    anoMax: "2023",
    kmMin: "0",
    kmMax: "999999999999"

}
export default function Filter() {
    
    const router = useRouter()

const [marcaFilt, setMarca] = useState('');
const handleChangeMarca = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMarca(event.target.value);
    query.marca = event.target.value
}

const [modelFilt, setModel] = useState('');
const handleChangeModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(event.target.value);
    query.modelo = event.target.value
}

const [estadoFilt, setEstado] = useState('');
const handleChangeEstado = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEstado(event.target.value);
    query.estado = event.target.value
}

const [anoMinFilt, setAnoMin] = useState('');
const handleChangeAnoMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnoMin(event.target.value);
    query.anoMin = event.target.value
}

const [anoMaxFilt, setAnoMax] = useState('');
const handleChangeAnoMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnoMax(event.target.value);
    query.anoMax = event.target.value
}

const [precoMinFilt, setPrecoMin] = useState('');
const handleChangePrecoMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrecoMin(event.target.value);
    query.precoMin = event.target.value
}

const [precoMaxFilt, setPrecoMax] = useState('');
const handleChangePrecoMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrecoMax(event.target.value);
    query.precoMax = event.target.value
}

const [kmMinFilt, setKmMin] = useState('');
const handleChangeKmMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKmMin(event.target.value);
    query.kmMin = event.target.value
}

const [kmMaxFilt, setKmMax] = useState('');
const handleChangeKmMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnoMax(event.target.value);
    query.kmMax = event.target.value
}

const handleClick = () => {
    const url = JSON.stringify(query)
    console.log(url)
    const url64 = Buffer.from(url).toString("base64")
    console.log(url64)
    router.push('/result?query=' + url64)
}

const modelosSelect = modelos.filter((modelo) => {
    if (marcaFilt != ''){
       return modelo.marca === marcaFilt
    } else {
        return modelos
    }
})

    return (
        <div className={styles.Filters}>
            <h2 className={styles.head}>Filtros de pesquisa</h2>
            <Select
                className={styles.input}
                label="Marca"
                placeholder="Qualquer marca"
                onChange={handleChangeMarca}
                value={marcaFilt}>
                    {marcas.map((marca) => (
                    <SelectItem key={marca.value} value={marca.value}>
                    {marca.label}
                    </SelectItem>
                    ))}
                </Select>

                <Select
                className={styles.input}
                label="Modelo"
                placeholder="Qualquer modelo"
                onChange={handleChangeModel}
                value={modelFilt}>
                    {modelosSelect.map((modelo) => (
                        <SelectItem key={modelo.value} value={modelo.value}>
                            {modelo.label}
                        </SelectItem>
                    ))}
                </Select>

                <Select
                className={styles.input}
                label='Estado'
                placeholder="País inteiro"
                onChange={handleChangeEstado}
                value={estadoFilt}>
                    {estados.map((estado) => (
                        <SelectItem key={estado.value} value={estado.value}>
                            {estado.label}
                        </SelectItem>
                    ))}
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

            <div className={styles.inputSideBar}>
                    <Input
                      className={styles.input2}
                      type="Ano"
                      label='Ano min'
                      placeholder="Ex. 1900"
                      onChange={handleChangeAnoMin}
                      value={anoMinFilt}
                      defaultValue={"1900"}>
                    </Input>
                    <Input
                        className={styles.input2}
                        type="Ano"
                        label='max'
                        placeholder="Ex. 2023"
                        onChange={handleChangeAnoMax}
                        value={anoMaxFilt}
                        defaultValue={'2023'}>
                    </Input>
                </div>

                <div className={styles.inputSideBar}>
                    <Input
                      className={styles.input2}
                      type="Preço"
                      label='Preço min'
                      placeholder="Ex. 20000"
                      onChange={handleChangePrecoMin}
                      value={precoMinFilt}>
                    </Input>
                    <Input
                        className={styles.input2}
                        type="Preco"
                        label='max'
                        placeholder="Ex. 200000"
                        onChange={handleChangePrecoMax}
                        value={precoMaxFilt}>
                    </Input>
                </div>

                <div className={styles.inputSideBar}>
                    <Input
                      className={styles.input2}
                      type="KM"
                      label='Quilometragem min'
                      placeholder="Ex. 0"
                      onChange={handleChangeKmMin}
                      value={kmMinFilt}>
                    </Input>
                    <Input
                        className={styles.input2}
                        type="KM"
                        label='max'
                        placeholder="200000"
                        onChange={handleChangeKmMax}
                        value={kmMaxFilt}
                        defaultValue={'2023'}>
                    </Input>
                </div>

            <Tabs className={styles.Tags} fullWidth={true}>
                <Tab className={styles.aaa} title="automatico"></Tab>
                <Tab className={styles.aaa} title="manual"></Tab>
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

            <div className={styles.Buttons}>
                <Button className={styles.SearchButton} onClick={handleClick}>
                Buscar
                </Button>
                <Button className={styles.ClearButton}>
                Limpar
                </Button>
            </div>
        </div>
    )
}
