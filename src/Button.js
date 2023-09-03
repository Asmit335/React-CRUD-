import React from 'react'
import { useState } from 'react'
export const Button = (props) => {
    const [number, setNumber] = useState()

    return ( <
        div >
        <
        button > { props.name } < /button> < /
        div >
    )
}