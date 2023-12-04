import { Select, SelectItem, Button } from "@nextui-org/react";
import styles from './styles.module.css'
import {marcas, modelos, estados} from "./data";
import {useState} from 'react'
import { useRouter } from "next/navigation";

const query = {
    modelo: "",
    marca: "",
    estado: "",
    precoMin: "0",
    precoMax: "99999999999999999",
    anoMin: "0",
    anoMax: "2023",
    kmMin: "0",
    kmMax: "999999999999"
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

const modelosSelect = modelos.filter((modelo) => {
    if (marcaFilt != ''){
       return modelo.marca === marcaFilt
    } else {
        return modelos
    }
})

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
                    {modelosSelect.map((modelo) => (
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
                <Button className={styles.SearchButton}
                onClick={handleClick}>
                Buscar
                </Button>
            </div>

        </div>
    )
}