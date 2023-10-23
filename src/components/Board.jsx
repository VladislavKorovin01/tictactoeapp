import React from "react";
import Square from "./Square";

function Board(){
    return(
        <div className="board">
            <div className="rowsquare"> 
                <Square i={0}/>
                <Square i={1}/>
                <Square i={2}/>
            </div>
            <div className="rowsquare"> 
                <Square i={3}/>
                <Square i={4}/>
                <Square i={5}/>
            </div>
            <div className="rowsquare"> 
                <Square i={6}/>
                <Square i={7}/>
                <Square i={8}/>
            </div>
    
        </div>
    );
}

export default Board;