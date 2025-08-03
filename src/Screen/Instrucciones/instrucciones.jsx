import react from "react";
import Index from "../index";
import { useNavigate } from "react-router-dom";

const Instrucciones = () => {
    const navigate = useNavigate();
    return (
        <div>
        <Index />
        <div className="instrucciones">
            <i onClick={() => navigate("/")} className="bi bi-x-octagon-fill cross"></i>
            <h1>Instrucciones 
                <hr />
            </h1>
            <p>El objetivo del juego es simple, adivinar la palabra oculta. La palabra tiene 5 letras y tienes 6 intentos para adivinarla. La palabra cambia cada vez que inicia el juego.</p>
            <p>Cada intento debe ser una palabra válida. En cada ronda el juego pinta cada letra de un color indicando si esa letra se encuentra o no en la palabra y si se encuentra en la posición correcta.</p>
            <section className="exampleSection">
                <article>
                    <div style={{backgroundColor: "Green"}} className="tile_example">M</div>
                    <p className="explication">VERDE significa que la letra está en la palabra y en la posición CORRECTA.</p>
                </article>
                <article>
                    <div style={{backgroundColor: "yellow"}} className="tile_example">A</div>
                    <p className="explication">AMARILLO significa que la letra letra está presente en la palabra pero en la posición INCORRECTA.</p>
                </article>
                <article>
                    <div style={{backgroundColor: "grey"}} className="tile_example">R</div>
                    <p className="explication">GRIS significa que la letra letra NO está presente en la palabra.</p>
                </article>
            </section>
        </div>
        </div>
    );
};

export default Instrucciones;