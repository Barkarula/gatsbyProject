import React from 'react'
import { Spring, config } from 'react-spring/renderprops'
import mouseDownIcon from '../../images/mousedown.png';
import smoothScroll from '../../utils/scrollTo.js'

export const ScrollDownIcon = () => {
    return (
        <Spring
            from={{ transform: "translateY(-10px)",
            opacity: 0 }}
            config={{
                ...config.default,
                delay: 1000
            }}
            to={{ transform: "translateY(0px)",
            opacity: 1 }}>
        {props => (
        <img
        onClick={() => smoothScroll(window.innerHeight)}
        style={props}
        src={mouseDownIcon}
        alt="scroll down for more information"
        className="mouse-down"/>
        )}
        </Spring>
    )
}
