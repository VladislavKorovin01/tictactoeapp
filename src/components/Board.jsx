import React from "react";
import Square from "./Square";

function Board({addValue}){
    return(
        <div className="board">
            <div className="rowsquare"> 
                <Square r={0} c={0} addValue={addValue}/>
                <Square r={0} c={1} addValue={addValue}/>
                <Square r={0} c={2} addValue={addValue}/>
            </div>
            <div className="rowsquare"> 
                <Square r={1} c={0} addValue={addValue}/>
                <Square r={1} c={1} addValue={addValue}/>
                <Square r={1} c={2} addValue={addValue}/>
            </div>
            <div className="rowsquare"> 
                <Square r={2} c={0} addValue={addValue}/>
                <Square r={2} c={1} addValue={addValue}/>
                <Square r={2} c={2} addValue={addValue}/>
            </div>
    
        </div>
    );
}

export default Board;