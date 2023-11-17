import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import styles from './styles.module.css'
import {marcas} from "./data";
import Link from "next/link";

export default function SearchBox() {
    return(
        <div className={styles.SearchBox}>
            <div className={styles.NormalSearch}>
                <Select
                className={styles.input}
                label="Marca"
                placeholder="Qualquer marca">
                    {marcas.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                    </SelectItem>
                    ))}
                </Select>

                <Select
                className={styles.input}
                label="Marca"
                placeholder="Qualquer marca">

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