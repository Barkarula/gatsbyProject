import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { injectIntl } from 'react-intl';


export default injectIntl(class Head extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const intl = this.props.intl
    return (
        <Helmet defaultTitle={intl.formatMessage({id: 'metaTitle'})}>
        <html lang={this.props.locale} />
        <link rel="canonical" href="https://vladabramov.pro/" />
        <meta name="docsearch:version" content="2.0" />
        <meta charset="utf-8" />
        <title>{intl.formatMessage({id: 'metaTitle'})}</title>
        <meta
            name="description"
            content={intl.formatMessage({id: 'metaDesc'})} />
        <meta
            name="keywords"
			content={intl.formatMessage({id: 'metaKeywords'})} />
		<meta property="og:locale" content={this.props.locale === "en" ? "en_US" : "ru_RU"} />
		<meta property="og:type" content="website" />
		<meta property="og:description" content={intl.formatMessage({id: 'metaDesc'})} />
		<meta property="og:title" content={intl.formatMessage({id: 'metaTitle'})} />
    <meta name="image" content="/og.jpg"></meta>
		<meta property="og:image" content="/og.jpg" />
		<meta property="og:url" content="https://vladabramov.pro/" />
		<meta property="og:site_name" content={intl.formatMessage({id: 'metaTitle'})} />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#195b97" />
<meta name="msapplication-TileColor" content="#e4efff" />
<meta name="theme-color" content="#195b97" />
      </Helmet>
    )
  }
})
