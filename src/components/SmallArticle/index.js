import React, { Component } from 'react'
import { Spring, config } from 'react-spring/renderprops'
import { FormattedMessage, injectIntl } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default injectIntl(class SmallArticle extends Component {
    constructor() {
        super()

    }

    componentDidMount = () => {

    }
    
  render() {
      console.log(this.props.content)
    return (
        <section className="section blog-section">
            {documentToReactComponents(JSON.parse(this.props.content.content.content))}
        </section>
    )
  }
})
