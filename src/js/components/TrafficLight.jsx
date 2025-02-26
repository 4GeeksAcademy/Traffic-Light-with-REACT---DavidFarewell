import React, { useState } from "react";
import "../../styles/index.css"; 

const TrafficLight = () => {
    const [color, setColor] = useState(""); 


    const handleLightClick = (selectedColor) => {
        setColor(selectedColor);
    };


    const toggleLight = () => {
        setColor(currentLight => 
            currentLight === "" ? "red" :  
            currentLight === "red" ? "yellow" :
            currentLight === "yellow" ? "green" : 
            "red" 
        );
    };

    return (
        <div className="container"> 
            <div className="palito"></div> 
            <div className="traffic-light"> 
                <div 
                    onClick={() => handleLightClick("red")}
                    className={"light red" + (color === "red" ? " brillo" : "")} 
                ></div>
                <div 
                    onClick={() => handleLightClick("yellow")}
                    className={"light yellow" + (color === "yellow" ? " brillo" : "")} 
                ></div>
                <div 
                    onClick={() => handleLightClick("green")}
                    className={"light green" + (color === "green" ? " brillo" : "")} 
                ></div>
            </div>


            <button onClick={toggleLight}>Alternar luz</button>
        </div>
    );
};

export default TrafficLight; 
