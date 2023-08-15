
import React, { FC, ReactElement } from "react";
import imgSrc from "../images/portrait.png";

const Portrait: FC<any> = (): ReactElement => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem"
            }}
        >
            <img src={imgSrc} alt="Portrait" className="image" 
            style={{ 
                maxWidth: "15rem", 
                borderRadius: "3rem",
            }}/>
        </div>
    );
}

export default Portrait;