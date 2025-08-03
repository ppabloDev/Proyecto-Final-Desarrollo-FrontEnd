import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./Screen/index/index.jsx";
import Game from "./Screen/game/game.jsx";
import LoadDiccionario from "./Screen/diccionario/components/LoadDiccionario.jsx";
import Instrucciones from "./Screen/Instrucciones/instrucciones.jsx";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/game" element={<Game />} />
            <Route path="/diccionario" element={<LoadDiccionario />} />
            <Route path="/instrucciones" element={<Instrucciones />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App