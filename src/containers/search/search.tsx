import AdvancedSearch from '@/components/advancedSearch/advancedSearch';
import SearchBox from '@/components/searchBox/searchBox';
import { useState } from 'react'
import { Button } from '@nextui-org/react';
import styles from './styles.module.css'
 
export default function Search() {
    const [isActive, setActive] = useState(false);
    return(
        <>
            <Change
            isActive={isActive}
            onShow={() => setActive(!isActive)}/>
        </>
    )
}

function Change(props: {isActive: boolean, onShow: () => void}) {

    return(
        <section className={styles.SearchContainer}>
            {!props.isActive && <SearchBox/>}
            {!!props.isActive && <AdvancedSearch/>}

            <Button className={styles.AdvancedButton} onClick={props.onShow}> Pesquisa Avançada</Button>
        </section>
    );
}

