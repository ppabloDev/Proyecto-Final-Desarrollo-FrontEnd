import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={"index"}>
                <img className="index_image" src="/static/images/logo.png" alt="My Own Wordle" />
                <button className="index_button" onClick={() => navigate("/game")}>Inicio</button>
                <button className="index_button" onClick={() => navigate("/diccionario")}>Diccionario</button>
                <button className="index_button" onClick={() => navigate("/instrucciones")}>Instrucciones</button>
            </div>

            <div>
                <span className="promo">Desing by <a style={{ marginLeft: "5px" }} href="https://github.com/ppabloDev"> @ppablo.dev</a></span>
            </div>
        </div>
    );
};

export default Index;