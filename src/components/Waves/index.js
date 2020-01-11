import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export const Waves = () => {
    return (
        <Spring
        from={{ transform: "translateY(100vh)" }}
        to={{ transform: "translateY(0px)" }}>
        {props => <div className="wavebg" style={props}></div>}
        </Spring>
    )
}
