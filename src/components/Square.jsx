import React, { useEffect, useState } from "react";

function Square(props){
    const[value,setValue]=useState('');
    useEffect(()=>{props.addValue(value,props.r,props.c);},[value])
    
    function ClickSquare(){
        // setValue(value==='X' ? 'O' : 'X');
        if(value==='' || value==='O')setValue('X');
        else{setValue('O')}
    }
    return(
        <div className="square" 
            onClick={()=>ClickSquare()}>
            <span className="value">{value}</span>
        </div>
    );
}

export default Square;