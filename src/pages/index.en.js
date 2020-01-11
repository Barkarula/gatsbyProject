import React from "react";

import { Helmet } from "react-helmet";

import Head from "../components/Head";
import Footer from "../components/Footer";
import { Ticker } from "../components/Ticker";
import { Waves } from "../components/Waves";
import InfoCard from "../components/InfoCard";
import { ScrollDownIcon } from "../components/ScrollDownIcon";
import Header from "../components/Header";
import { ContactsFooter } from "../components/ContactsFooter";
import Skills from "../components/Skills";
import Works from "../components/Works";
import BlogLead from "../components/BlogLead";
import { Analytic } from "../components/Analytics";

import ru from "../locales/ru";
import en from "../locales/en";
import { IntlProvider, addLocaleData, FormattedMessage } from "react-intl";
import IPIndentify from "../utils/IPIndentify";

const locales = { en, ru };
addLocaleData([locales.en, locales.ru]);

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en",
    };
    IPIndentify(this.state.locale);
  }

  changeLocale = locale => {
    this.setState(prevState => {
      return {
        ...prevState,
        locale: locale,
      };
    });
  };

  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={locales[this.state.locale]}
      >
        <>
          <Head locale={this.state.locale} />
          <Helmet>
            <script type="application/ld+json">
              {`
          "@context": "http://schema.org/",
          "@type": "Person",
          "name": "Vladislav Abramov",
          "alternateName": "Владислав Абрамов",
          "url": "http://vladabramov.pro",
          "image": "http://vladabramov.pro/og.jpg",
          "jobTitle": "Frontend developer"  
        `}
            </script>
          </Helmet>
          <main
            className="welcome"
            itemScope
            itemType="http://schema.org/Person"
          >
            <meta itemProp="name" content="Владислав Абрамов" />
            <meta itemProp="alternateName" content="Vladislav Abramov" />
            <meta itemProp="jobTitle" content="Frontend разработчик" />
            <img
              alt="Vladislav Abramov Frontend developer"
              itemProp="image"
              style={{ display: "none" }}
              src="http://vladabramov.pro/og.jpg"
            />
            <link itemProp="url" href="http://vladabramov.pro" />
            <Header locale={this.state.locale} />
            <InfoCard />
            <Ticker />
            <div className="welcome__footer">
              <ContactsFooter />
              <ScrollDownIcon />
            </div>
            <Waves />
          </main>
          <Skills />
          <Works />
          <BlogLead />
          <Footer />
          {/* <Analytics /> */}
        </>
      </IntlProvider>
    );
  }
}
