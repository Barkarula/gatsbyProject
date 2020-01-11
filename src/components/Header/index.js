import React, { Component } from 'react'
import { Spring, config } from 'react-spring/renderprops'
import blogIcon from '../../images/blog.svg';
import { Link } from 'gatsby'

export default class Header extends Component {
  render() {
    // let ruLanguageClassnames = ['language']
    // let enLanguageClassnames = ['language']
    // console.log(this.props)
    // if (this.props.locale == 'ru') {
    //   ruLanguageClassnames.push('language--active')
    // } else {
    //   enLanguageClassnames.push('language--active')
    // }
    return (
        <Spring
        from={{ transform: "translateY(-10px)",
        opacity: 0 }}
        config={{
            ...config.slow,
            delay: 500
        }}
        to={{ transform: "translateY(0px)",
        opacity: 1 }}>
        {props => (
           <div style={props} className="blog-link">
           {/* <a href="#" className="blog-link__container">
            <img src={blogIcon} alt="blog" className="blog-link__icon" />
            <span className="blog-link__text">
            <FormattedMessage id="blog" />
            </span>
           </a> */}
           <div className="languages">
                <Link to="/" className="language" activeClassName="language--active">RU</Link>
                <span className="language__delimiter">/</span>
                <Link to="/en/" className="language" activeClassName="language--active">EN</Link>
            </div>
           </div>
        )}
           </Spring>
    )
  }
}
