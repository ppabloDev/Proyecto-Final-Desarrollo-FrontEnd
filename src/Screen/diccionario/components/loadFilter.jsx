import React from "react";

const LoadFilter = ({ arrayToLoad }) => {
return (<div className="diccionario_words">
    {arrayToLoad.map((palabra, index) => (
        <span key={index} className="diccionario_word">{palabra}</span>
    ))}
</div>
)
}

export default LoadFilter