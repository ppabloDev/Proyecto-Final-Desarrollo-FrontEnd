import React, { useEffect, useState, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { todasLasPalabras } from "../../ArrayOfWordle.jsx";

const Diccionario = () => {
    const DiccionarioWords = lazy(() => import("./components/loadFilter"));
    const navigate = useNavigate();
    const [arrayToLoad, setArrayToLoad] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setArrayToLoad(todasLasPalabras);
    }, []);

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase();
        setInputValue(value);
        if (value === "") {
            setArrayToLoad(todasLasPalabras);
        } else {
            const filtered = todasLasPalabras.filter(palabra =>
                palabra.includes(value)
            );
            if (filtered.length === 0) {
                setArrayToLoad(["No se encontraron palabras"]);
            }
            else {
                setArrayToLoad(filtered);
            }
        }
    };

    return (
        <div>
            <div className="diccionario">
                <i onClick={() => navigate("/")} className="bi bi-x-octagon-fill cross"></i>
                <h1>DICCIONARIO
                    <hr />
                </h1>
                <div className="diccionario_content">
                    <p>Para mas informacion, usa la barra de busqueda</p>
                    <div>
                        <span className="diccionario_span">Busqueda</span>
                        <hr />
                        <input
                            maxLength={5}
                            value={inputValue}
                            onChange={handleChange}
                            type="text"
                            placeholder="Tu palabra favorita..."
                        />
                        <div className="diccionario_info">
                            <i className="bi bi-info-circle-fill"></i>
                            <span> ¿No sabes que escribir? ¡Pon las letras que quieras!</span>
                        </div>
                    </div>
                </div>
                <Suspense fallback={<p className="diccionario_words load">Cargando...</p>}>
                    <DiccionarioWords arrayToLoad={arrayToLoad}/>
                </Suspense>
            </div>
        </div>
    );
};

export default Diccionario;