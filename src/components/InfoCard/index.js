import React, { Component } from 'react'
import { Spring, config } from 'react-spring/renderprops'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import { FormattedMessage, injectIntl } from "react-intl";

import { Button } from '../Button'

import portfolioIcon from '../../images/portfolio.svg';
import cvIcon from '../../images/resume1.svg';
import smoothScroll from '../../utils/scrollTo';

export default injectIntl(class InfoCard extends Component {
    constructor() {
        super()
        this.worksHeight = null
    }
    worksHeight = null
    componentDidMount = () => {
        this.worksHeight = document.querySelector('.works').getBoundingClientRect().top + document.body.scrollTop
        console.warn('worksHeight: ',this.worksHeight)
    }
    
  render() {
    return (
        <Spring
        from={{ transform: "translateY(-100vh)" }}
        to={{ transform: "translateY(0px)" }}>
        {props => (
            <div style={props} className="welcome__card card">
            <div className="card__heading">
                <h1 className="card__text-heading heading">
                <FormattedMessage id="card.heading">
                {txt => (
                <Typist
                avgTypingDelay={90}
                stdTypingDelay={40}
                cursor={{
                  show: true,
                  blink: true,
                  element: '|',
                  hideWhenDone: true,
                  hideWhenDoneDelay: 1000,
                }}>
                <Typist.Delay ms={750} />
                {txt}
                </Typist>
                )}
                </FormattedMessage>
                </h1>
                <div className="card__symbol">></div>
            </div>
            <h2 className="card__subheading">
            <FormattedMessage id="card.subheading" />
            </h2>
            <h3 className="card__desc">
            <FormattedMessage id="card.desc" />
            </h3>
            <Spring
        from={{ transform: "translateY(-10px)",
            opacity: 0 }}
            config={{
                ...config.default,
                delay: 300
            }}
            to={{ transform: "translateY(0px)",
            opacity: 1 }}>
        {props => (
            <div style={props} className="card__buttons-container buttons">
                <Button
                icon={portfolioIcon}
                msgID="button.portfolio"
                onPress={(e) => {
                    e.preventDefault()
                    smoothScroll(this.worksHeight)
                }}
                />
                <Button
                secondary
                icon={cvIcon}
                msgID="button.cv"
                link={"resume.pdf"}
                />
            </div>
        )}
        </Spring>
        </div>
        )}
        </Spring>
    )
  }
})
