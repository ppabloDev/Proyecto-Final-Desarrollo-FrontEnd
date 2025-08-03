import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./Screen/index/index.jsx";
import Game from "./Screen/game/game.jsx";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App