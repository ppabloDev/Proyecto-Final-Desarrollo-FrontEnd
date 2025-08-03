import React from "react";
import "./index.css";
import Game from "../game/game";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={"index"}>
                <img className="index_image" src="/src/assets/Images/Logo.png" alt="My Own Wordle" />
                <button className="index_button" onClick={() => navigate("/game")}>Inicio</button>
                <button className="index_button">Diccionario</button>
                <button className="index_button">Instrucciones</button>
            </div>

            <div>
                <span className="promo">Desing by <a href="https://www.instagram.com/ppablo.dev/"> @ppablo.dev</a></span>
            </div>
        </div>
    );
};

export default Index;