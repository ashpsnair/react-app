import React from 'react'
import './Button.css';

function Button(props) {
    return (
        
        <div>

            <button className={props.name}> Default</button>
            
            
        </div>      
        
    );
}

export default Button;
