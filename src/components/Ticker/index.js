import React from 'react'
import { Spring, config } from 'react-spring/renderprops'
import { FormattedMessage } from "react-intl";

export const Ticker = () => {
    return (
        <Spring
        config={{
            ...config.slow,
            delay: 400,
        }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => (
        <div className="ticker__container" style={props}>
        <h4 className="ticker">
        <FormattedMessage id="card.subheading" />
        </h4>
        </div>
        )}
        </Spring>
    )
}
