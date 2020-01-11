import React, { Component } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

export default injectIntl(
  class BlogLead extends Component {
    constructor() {
      super()
    }

    componentDidMount = () => {}

    render() {
      const locale = this.props.intl.locale
      return (
        <section className="section blog-section">
              <div className="blog__inner">
                <a
                  className="blog__link"
                  target="_blank"
                  href={'https://medium.com/frontexp'}
                >
                  <FormattedMessage id="blog" />
                </a>
                <p className="blog__desc">
                  <FormattedMessage id="blog-lead" />
                </p>
              </div>
        </section>
      )
    }
  }
)
