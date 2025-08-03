import React, { useState, useEffect } from "react";
import "./PopUp.css";

const PopUpWin = ({ tryNumber, palabra }) => {
    const [popAnimation, setPopAnimation] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => setPopAnimation(false), 3000);
    }, []);

    const Significado = "https://www.google.com/search?q=significado+de+" + palabra;
    const styleConstante = {
        animation: popAnimation
            ? "popIn 1s cubic-bezier(.68,-0.55,.27,1.55) forwards"
            : ""
    };

    if (tryNumber === 1) {
        return (
            <div style={styleConstante} className="PopUp">
                <p><s style={{ color: "green", textDecoration: "none", backgroundColor: "white" }}>¡Felicidades!</s> Has ganado en tu primer intento.</p>
                <a className="significado" href={Significado} target="_blank">Significado de {palabra}</a>
            </div>
        );
    }
    return (
        <div style={styleConstante} className="PopUp">
            <p><s style={{ color: "green", textDecoration: "none", backgroundColor: "white" }}>¡Felicidades!</s> Has ganado en {tryNumber} intentos.</p>
            <a className="significado" href={Significado} target="_blank">Significado de {palabra}</a>
        </div>
    );
};

const PopUpLose = ({ palabra }) => {
    const [popAnimation, setPopAnimation] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => setPopAnimation(false), 3000);
    }, []);


    const Significado = "https://www.google.com/search?q=significado+de+" + palabra;
    const styleConstante = {
        animation: popAnimation
            ? "popIn 1s cubic-bezier(.68,-0.55,.27,1.55) forwards"
            : ""
    };

    return (
        <div style={styleConstante} className="PopUp">
            <p>Lo siento, <s style={{ color: "red", textDecoration: "none", backgroundColor: "white" }}>has perdido</s>. La palabra era: <strong>{palabra}</strong>.</p>
            <a className="significado" href={Significado} target="_blank">Significado de {palabra}</a>
        </div>
    );
};

const PopUpNotaWord = () => {
    const [popAnimation, setPopAnimation] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => setPopAnimation(false), 3000);
        return () => {
            clearTimeout(timer1);
        };
}, []);

    const styleConstante = {
        animation: popAnimation
            ? "popIn 1s cubic-bezier(.68,-0.55,.27,1.55) forwards"
            : "popOut 1s cubic-bezier(.68,-0.55,.27,1.55) forwards",
    };
    return (
        <div style={styleConstante} className="PopUp">
                <p>Esta palabra no se encuentra en el diccionario</p>
        </div>
    );
};

const PopUpNotallwords = () => {
    const [popAnimation, setPopAnimation] = useState(true);

    useEffect(() => {
        const timer1 = setTimeout(() => setPopAnimation(false), 3000);
        return () => {
            clearTimeout(timer1);
        };
}, []);

    const styleConstante = {
        animation: popAnimation
            ? "popIn 1s cubic-bezier(.68,-0.55,.27,1.55) forwards"
            : "popOut 1s cubic-bezier(.68,-0.55,.27,1.55) forwards",
    };
    return (
        <div style={styleConstante} className="PopUp">
                <p>Por favor, solo palabras de 5 letras</p>
        </div>
    );
};

export { PopUpWin, PopUpLose, PopUpNotaWord, PopUpNotallwords };