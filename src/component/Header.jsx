import React from 'react'

const Header = ({to}) => {
    
    return (
        <div>{to}</div>
    )

    /* return React.createElement("div", null, `Header ${to}`) */
}

export default Header