import React from 'react'
import './Button.css';

function Button(props) {
    return (
        
        <div>
            <p className={props.para} > { props.content}</p>
            <button className={props.name}> Default</button>   
            
        </div>      
        
    );
}

export default Button;
