import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState("this is default state of a hooks component")
    const [key2, setKey2] = useState(0)

    return (
        <>
        <button onClick={() => setKey1("sadasdasd")}>
                {key1}
        </button>

        <button onClick={() => setKey2(1)}>
            {key2}
        </button>
        </>
    )
}

export default ButtonWithHooks