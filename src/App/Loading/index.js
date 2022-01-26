import React from "react";
import './loading.css';

function Loading(){
    return(
        <>
            <div className = 'dots-container'>
                <span className = 'dot dot1'></span>
                <span className = 'dot dot2'></span>
                <span className = 'dot dot3'></span>
            </div>
        </>
    );
}

export { Loading };