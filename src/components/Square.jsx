import React from "react";

function Square(props){
    return(
        <div className="square" 
            onClick={()=>console.log(props.i)}>
            
        </div>
    );
}

export default Square;