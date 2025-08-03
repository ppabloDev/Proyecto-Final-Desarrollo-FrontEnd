import React, { useEffect, useState } from "react";
import Index from "../../index/index.jsx";
import Diccionario from "../Diccionario.jsx";
const LoadDiccionario = ({ }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 250);
    }, []);
    return (
        <div>
            <Index />
            { isLoaded ? <Diccionario /> : <p className="loading">Cargando...</p> }
        </div>
    );
};

export default LoadDiccionario;