'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react";
import styles from './styles.module.css'

export default function SignOut() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return(
    <>
    <Button className={styles.logOutButton} size='lg' onPress={onOpen}> Sair </Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className={styles.modal}>
            {(onClose) => (
                <>
                <ModalHeader className={styles.modalHead}> Sair </ModalHeader>
                <ModalBody>
                    <a>Sair da sua conta?</a>
           
                </ModalBody>
                 <ModalFooter className={styles.buttons}>
                        <Button className={styles.logOutButton} size='lg' onPress={() => (signOut())}> Sair </Button>
                        <Button className={styles.cancelButton} size='lg' onPress={onClose}> Cancelar </Button>
                </ModalFooter>
                </>
            )
            }
        </ModalContent>
    </Modal>
    </>
    )
}