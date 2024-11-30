import React, { createContext, useEffect, useState } from 'react';

const LangContext = createContext({

});

const LangProvider = (props) => {
    const [checkLang, setCheckLang] = useState("en")
    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) setCheckLang(savedLang);
        // else setCheckLang('en'); // default language when no saved language
    }, [])

    return (
        <LangContext.Provider value={{ checkLang, setCheckLang }}>
            {props.children}
        </LangContext.Provider>
    );
};


export { LangContext, LangProvider };