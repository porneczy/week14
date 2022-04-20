import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("this is default state of a hooks component")
    const handleClick = () => setKey1("megnyomtad") 
    
    return (
        
        <button onClick={handleClick}>
                {key1}
        </button>
    )
}

export default ButtonWithHooks