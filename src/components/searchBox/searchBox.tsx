import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import styles from './styles.module.css'
import {marcas, modelos} from "./data";
import Link from "next/link";
import {useState} from 'react'

export default function SearchBox() {
const [marcaFilt, setMarca] = useState('');
const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMarca(event.target.value);

    console.log(event.target.value)
}

const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
}


    return(
        <div className={styles.SearchBox}>
            <div className={styles.NormalSearch}>
                <Select
                className={styles.input}
                label="Marca"
                onChange={handleChange}
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
                placeholder="Qualquer modelo">
                </Select>
                <Input
                className={styles.input}
                type="Estado"
                label='Estado'
                placeholder="País inteiro">
                </Input>
                <Link className={styles.SearchButton}
                href={{
                    pathname: "./result"
                    }}>
                Buscar
                </Link>
            </div>

        </div>
    )
}