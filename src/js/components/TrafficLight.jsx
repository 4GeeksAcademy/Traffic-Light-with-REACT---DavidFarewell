import React, { useState } from "react";
import "../../styles/index.css"; 

const TrafficLight = () => {
    const [colors, setColors] = useState(["red", "yellow", "green"]); 
    const [color, setColor] = useState(""); 

    const changeLight = (newColor) => {
        setColor(newColor);
    };


    const nextLight = () => {
        let currentIndex = colors.indexOf(color);
        let nextColor = (currentIndex === -1 || currentIndex === colors.length - 1) ? colors[0] : colors[currentIndex + 1];
        setColor(nextColor);
    };


    const addPurple = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };

    return (
        <div className="container">
            <div className="palito"></div>
            <div className="traffic-light">
                {colors.map((lightColor, index) => (
                    <div 
                        key={index}
                        onClick={() => changeLight(lightColor)}
                        className={`light ${lightColor} ${color === lightColor ? "brillo" : ""}`}
                        style={{ "--light-color": lightColor }} 
                    ></div>
                ))}
            </div>
            <button onClick={nextLight}>Alternar luz</button>
            <button onClick={addPurple}>Añadir color morado</button>
        </div>
    );
};

export default TrafficLight;
