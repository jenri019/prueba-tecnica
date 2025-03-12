import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isCreate, setIsCreate] = useState(true);

    const handleShowPopup = (isCreate = true) => {
        setIsCreate(isCreate);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <PopupContext.Provider
            value={{
                showPopup,
                isLoading,
                isCreate,
                handleShowPopup,
                handleClosePopup,
                setIsLoading
            }}
        >
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => useContext(PopupContext);