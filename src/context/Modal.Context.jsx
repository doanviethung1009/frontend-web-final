import React, { createContext, useState } from 'react';

// Create ModalContext with a default value
const ModalContext = createContext({
    isOpenModal: false,
    setIsOpenModal: () => { },
    handleIsOpen: () => { },
    handleIsClose: () => { },
    toggleIsOpen: () => { },
});

const ModalProvider = ({ children }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleIsOpen = () => setIsOpenModal(true);
    const handleIsClose = () => setIsOpenModal(false);
    const toggleIsOpen = () => setIsOpenModal((prev) => !prev);
    console.log(isOpenModal)

    return (
        <ModalContext.Provider value={{ isOpenModal, setIsOpenModal, handleIsOpen, handleIsClose, toggleIsOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };