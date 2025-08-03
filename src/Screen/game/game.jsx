import React, { useEffect } from "react";
import "./game.css";
import { todasLasPalabras } from "../../ArrayOfWordle";
import { useNavigate } from "react-router-dom";
import Index from "../index";
import { PopUpWin, PopUpLose, PopUpNotaWord, PopUpNotallwords } from "./Components/PopUp.jsx";

const Game = ({ }) => {

    const navigate = useNavigate();

    const [isMounted, setIsMounted] = React.useState(false);
    const [palabra, setPalabra] = React.useState("");
    useEffect(() => {
        setPalabra(
            todasLasPalabras[Math.floor(Math.random() * todasLasPalabras.length)]
        );
        setIsMounted(true);

        const timer = setTimeout(() => setIsMounted(false), 300);

        return () => clearTimeout(timer);
    }, []);
    console.log(palabra);
    const [guess1, setguess1] = React.useState(["", "", "", "", ""]);

    const [guess2, setguess2] = React.useState(["", "", "", "", ""]);

    const [guess3, setguess3] = React.useState(["", "", "", "", ""]);

    const [guess4, setguess4] = React.useState(["", "", "", "", ""]);

    const [guess5, setguess5] = React.useState(["", "", "", "", ""]);

    const [guess6, setguess6] = React.useState(["", "", "", "", ""]);

    const [actualguess, setActualguess] = React.useState(1);
    if (actualguess === 1) {
        var guess = guess1;
        var setguess = setguess1;
    } else if (actualguess === 2) {
        var guess = guess2;
        var setguess = setguess2;
    } else if (actualguess === 3) {
        var guess = guess3;
        var setguess = setguess3;
    } else if (actualguess === 4) {
        var guess = guess4;
        var setguess = setguess4;
    } else if (actualguess === 5) {
        var guess = guess5;
        var setguess = setguess5;
    } else if (actualguess === 6) {
        var guess = guess6;
        var setguess = setguess6;
    }


    const letterOnClick = (letter) => {
        if (!win) {
        if (guess[0] === "") {
            setguess([letter, "", "", "", ""]);
            let tile = document.getElementById(`tile_${actualguess}-0`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[1] === "") {
            setguess([guess[0], letter, "", "", ""]);
            let tile = document.getElementById(`tile_${actualguess}-1`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[2] === "") {
            setguess([guess[0], guess[1], letter, "", ""]);
            let tile = document.getElementById(`tile_${actualguess}-2`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[3] === "") {
            setguess([guess[0], guess[1], guess[2], letter, ""]);
            let tile = document.getElementById(`tile_${actualguess}-3`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[4] === "") {
            setguess([guess[0], guess[1], guess[2], guess[3], letter]);
            let tile = document.getElementById(`tile_${actualguess}-4`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (true) {
            return;
        }
    }
    };
    const eraseLastLetter = () => {
        if (!win) {
        if (guess[4] !== "") {
            setguess([guess[0], guess[1], guess[2], guess[3], ""]);
            let tile = document.getElementById(`tile_${actualguess}-4`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[3] !== "") {
            setguess([guess[0], guess[1], guess[2], "", ""]);
            let tile = document.getElementById(`tile_${actualguess}-3`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[2] !== "") {
            setguess([guess[0], guess[1], "", "", ""]);
            let tile = document.getElementById(`tile_${actualguess}-2`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[1] !== "") {
            setguess([guess[0], "", "", "", ""]);
            let tile = document.getElementById(`tile_${actualguess}-1`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        } else if (guess[0] !== "") {
            setguess(["", "", "", "", ""]);
            let tile = document.getElementById(`tile_${actualguess}-0`);
            tile.style.transform = "scale(1.2)";
            tile.style.transition = "transform 0.3s ease";
            setTimeout(() => { tile.style.transform = "scale(1)" 
            tile.style.transition = "transform 0.3s ease" }, 150);
        }
    }
    };

    const shakeSection = ({ actualguess }) => {
        const sect = document.getElementById(
                            `section_${actualguess}`
                        );
                
                sect.style.transform = "translateX(5px)";
                sect.style.transition = "transform 0.1s ease-out";
                setTimeout(() => {
                    sect.style.transform = "translateX(-5px)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 100);
                setTimeout(() => {
                    sect.style.transform = "translateX(5px)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 200);
                setTimeout(() => {
                    sect.style.transform = "translateX(-5px)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 300);
                setTimeout(() => {
                    sect.style.transform = "translateX(5px)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 400);
                setTimeout(() => {
                    sect.style.transform = "translateX(-5px)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 500);
                setTimeout(() => {
                    sect.style.transform = "translateX(5px)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 600);
                setTimeout(() => {
                    sect.style.transform = "translateX(-5px)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 700);
                setTimeout(() => {
                    sect.style.transform = "translateX(0)";
                    sect.style.transition = "transform 0.1s ease-out";
                }, 800);
    }


    const [win, setWin] = React.useState(false);
    const [lose, setLose] = React.useState(false);
    const [popAnimation, setPopAnimation] = React.useState(false);
    const [popAnimation2, setPopAnimation2] = React.useState(false);
    const checkWord = () => {
        if (!win) {
        if (
            guess[0] !== "" &&
            guess[1] !== "" &&
            guess[2] !== "" &&
            guess[3] !== "" &&
            guess[4] !== ""
        ) {
            if (todasLasPalabras.includes(guess.join(""))) {
                setActualguess(actualguess + 1);
                guess.forEach((letter, index) => {
                    setTimeout(() => {
                    if (letter === palabra.split("")[index]) {
                        const tile = document.getElementById(
                            `tile_${actualguess}-${index}`
                        );
                        tile.style.backgroundColor = "green";
                        tile.style.transform = "scale(1.2)";
                        tile.style.transition = "transform 0.3s ease";
                        setTimeout(() => { tile.style.transform = "scale(1)" 
                        tile.style.transition = "transform 0.3s ease" }, 150);
                        const keyboardButtons = document.querySelectorAll(".keyboardButton");
                            keyboardButtons.forEach((btn) => {
                            if (btn.textContent === letter) {
                                btn.style.backgroundColor = "green";
                            }
                        });
                    } 
                    else if (palabra.includes(letter)) {
                        const tile = document.getElementById(
                            `tile_${actualguess}-${index}`
                        );
                        tile.style.backgroundColor = "yellow";
                        tile.style.transform = "scale(1.2)";
                        tile.style.transition = "transform 0.3s ease";
                        setTimeout(() => { tile.style.transform = "scale(1)" 
                        tile.style.transition = "transform 0.3s ease" }, 150);
                        const keyboardButtons =
                            document.querySelectorAll(".keyboardButton");
                            keyboardButtons.forEach((btn) => {
                            if (btn.textContent === letter) {
                                if (btn.style.backgroundColor !== "green")
                                {
                                    btn.style.backgroundColor = "yellow";
                                }
                            }
                        });
                    } 
                    else {
                        const tile = document.getElementById(
                            `tile_${actualguess}-${index}`
                        );
                        tile.style.backgroundColor = "grey";
                        tile.style.transform = "scale(1.2)";
                        tile.style.transition = "transform 0.3s ease";
                        setTimeout(() => { tile.style.transform = "scale(1)" 
                        tile.style.transition = "transform 0.3s ease" }, 150);
                        const keyboardButtons =
                            document.querySelectorAll(".keyboardButton");
                            keyboardButtons.forEach((btn) => {
                            if (btn.textContent === letter) {
                                btn.style.backgroundColor = "grey";
                            }
                        });
                        tile.style.backgroundColor = "grey";
                    }
                    if (guess.join("") === palabra) {
                        setWin(true);
                        return;
                    }
                    else if (actualguess === 6) {
                        setLose(true);
                    }
                }, 200 * index);});
            } else {
                
                shakeSection({ actualguess });

                setPopAnimation(true);
                setTimeout(() => {
                    setPopAnimation(false);
                }, 3600);
            }
        } else {
            
            shakeSection({ actualguess });

            setPopAnimation2(true);
            setTimeout(() => {
                setPopAnimation2(false);
            }, 3600);
        }
    }
    };
    return (
        <div>
            <Index />
            <div
                style={{
                    transform: isMounted ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease",
                }}
                className="gameScreen"
            >
                <i onClick={() => navigate("/")} className="bi bi-x-octagon-fill cross"></i>
                <div>
                    <h1>WORLDE</h1>
                </div>
                <div className="gameBoard">
                    <section id="section_1" className="tilesSection">
                        <div id="tile_1-0" className="letter_box">
                            {guess1[0]}
                        </div>
                        <div id="tile_1-1" className="letter_box">
                            {guess1[1]}
                        </div>
                        <div id="tile_1-2" className="letter_box">
                            {guess1[2]}
                        </div>
                        <div id="tile_1-3" className="letter_box">
                            {guess1[3]}
                        </div>
                        <div id="tile_1-4" className="letter_box">
                            {guess1[4]}
                        </div>
                    </section>
                    <section id="section_2" className="tilesSection">
                        <div id="tile_2-0" className="letter_box">
                            {guess2[0]}
                        </div>
                        <div id="tile_2-1" className="letter_box">
                            {guess2[1]}
                        </div>
                        <div id="tile_2-2" className="letter_box">
                            {guess2[2]}
                        </div>
                        <div id="tile_2-3" className="letter_box">
                            {guess2[3]}
                        </div>
                        <div id="tile_2-4" className="letter_box">
                            {guess2[4]}
                        </div>
                    </section>
                    <section id="section_3" className="tilesSection">
                        <div id="tile_3-0" className="letter_box">
                            {guess3[0]}
                        </div>
                        <div id="tile_3-1" className="letter_box">
                            {guess3[1]}
                        </div>
                        <div id="tile_3-2" className="letter_box">
                            {guess3[2]}
                        </div>
                        <div id="tile_3-3" className="letter_box">
                            {guess3[3]}
                        </div>
                        <div id="tile_3-4" className="letter_box">
                            {guess3[4]}
                        </div>
                    </section>
                    <section id="section_4" className="tilesSection">
                        <div id="tile_4-0" className="letter_box">
                            {guess4[0]}
                        </div>
                        <div id="tile_4-1" className="letter_box">
                            {guess4[1]}
                        </div>
                        <div id="tile_4-2" className="letter_box">
                            {guess4[2]}
                        </div>
                        <div id="tile_4-3" className="letter_box">
                            {guess4[3]}
                        </div>
                        <div id="tile_4-4" className="letter_box">
                            {guess4[4]}
                        </div>
                    </section>
                    <section id="section_5" className="tilesSection">
                        <div id="tile_5-0" className="letter_box">
                            {guess5[0]}
                        </div>
                        <div id="tile_5-1" className="letter_box">
                            {guess5[1]}
                        </div>
                        <div id="tile_5-2" className="letter_box">
                            {guess5[2]}
                        </div>
                        <div id="tile_5-3" className="letter_box">
                            {guess5[3]}
                        </div>
                        <div id="tile_5-4" className="letter_box">
                            {guess5[4]}
                        </div>
                    </section>
                    <section id="section_6" className="tilesSection">
                        <div id="tile_6-0" className="letter_box">
                            {guess6[0]}
                        </div>
                        <div id="tile_6-1" className="letter_box">
                            {guess6[1]}
                        </div>
                        <div id="tile_6-2" className="letter_box">
                            {guess6[2]}
                        </div>
                        <div id="tile_6-3" className="letter_box">
                            {guess6[3]}
                        </div>
                        <div id="tile_6-4" className="letter_box">
                            {guess6[4]}
                        </div>
                    </section>
                </div>
                <div className="keyboard">
                    <section className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("Q")}
                        >
                            Q
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("W")}
                        >
                            W
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("E")}
                        >
                            E
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("R")}
                        >
                            R
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("T")}
                        >
                            T
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("Y")}
                        >
                            Y
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("U")}
                        >
                            U
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("I")}
                        >
                            I
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("O")}
                        >
                            O
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("P")}
                        >
                            P
                        </button>
                    </section>
                    <section className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("A")}
                        >
                            A
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("S")}
                        >
                            S
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("D")}
                        >
                            D
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("F")}
                        >
                            F
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("G")}
                        >
                            G
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("H")}
                        >
                            H
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("J")}
                        >
                            J
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("K")}
                        >
                            K
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("L")}
                        >
                            L
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("Ñ")}
                        >
                            Ñ
                        </button>
                    </section>
                    <section className="keyboardRow">
                        <button className="keyboardButton" onClick={() => checkWord()}>
                            <i className="bi bi-check2"></i>
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("Z")}
                        >
                            Z
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("X")}
                        >
                            X
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("C")}
                        >
                            C
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("V")}
                        >
                            V
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("B")}
                        >
                            B
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("N")}
                        >
                            N
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => letterOnClick("M")}
                        >
                            M
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => eraseLastLetter()}
                        >
                            <i className="bi bi-arrow-left"></i>
                        </button>
                    </section>
                </div>
            </div>
            <div>
            {win ? <PopUpWin tryNumber={actualguess - 1} palabra={palabra} /> : null}
            {lose ? <PopUpLose palabra={palabra} /> : null}
            {popAnimation ? <PopUpNotaWord /> : null}
            {popAnimation2 ? <PopUpNotallwords /> : null}
            </div>
        </div>
    );
};

export default Game;
