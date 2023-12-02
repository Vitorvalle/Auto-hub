import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import styles from './styles.module.css'
import {marcas, modelos, estados} from "./data";
import Link from "next/link";
import {useState} from 'react'
import { useRouter } from "next/navigation";

const query = {
    modelo: "",
    marca: "",
    estado: "",
}

export default function SearchBox() {

const router = useRouter()

const [marcaFilt, setMarca] = useState('');
const handleChangeMarca = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMarca(event.target.value);
    query.marca = event.target.value
    console.log(event.target.value)
    console.log(query)
}

const [modelFilt, setModel] = useState('');
const handleChangeModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(event.target.value);
    query.modelo = event.target.value
    console.log(event.target.value)
    console.log(query)
}

const [estadoFilt, setEstado] = useState('');
const handleChangeEstado = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEstado(event.target.value);
    query.estado = event.target.value
    console.log(event.target.value)
    console.log(query)
}

const handleClick = () => {
    const url = JSON.stringify(query)
    console.log(url)
    const url64 = Buffer.from(url).toString("base64")
    console.log(url64)
    router.push('/result?query=' + url64)
}



    return(
        <div className={styles.SearchBox}>
            <div className={styles.NormalSearch}>
                <Select
                className={styles.input}
                label="Marca"
                onChange={handleChangeMarca}
                placeholder="Qualquer marca"
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
                onChange={handleChangeModel}
                placeholder="Qualquer modelo"
                value={modelFilt}>
                    {modelos.map((modelo) => (
                        <SelectItem key={modelo.value} value={modelo.value}>
                            {modelo.label}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                className={styles.input}
                label="Estado"
                onChange={handleChangeEstado}
                placeholder="País Inteiro"
                value={estadoFilt}>
                    {estados.map((estado) => (
                        <SelectItem key={estado.value} value={estado.value}>
                            {estado.label}
                        </SelectItem>
                    ))}
                </Select>
                <div className={styles.SearchButton}
                onClick={handleClick}>
                Buscar
                </div>
            </div>

        </div>
    )
}