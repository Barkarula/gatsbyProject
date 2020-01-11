import React from "react"
import { Link } from "gatsby"
import notFound from '../images/notfound.png'

import ru from '../locales/ru';
import en from '../locales/en';
import { IntlProvider, addLocaleData, FormattedMessage } from "react-intl";





const locales = { en, ru };
addLocaleData([locales.en, locales.ru])



export default class NotFound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locale: 'ru',
        }
    }

    render() {

     return (
        <IntlProvider
        locale={this.state.locale}
        messages={locales[this.state.locale]}
        >
            <div className="not-found">
                <img src={notFound} alt="404" className="not-found__img"/>
                <h1 className="not-found__text">
                <FormattedMessage id="404" />
                </h1>
                <Link to="/" className="go-back">
                <FormattedMessage id="goBack" />
                </Link>
            </div>
        </IntlProvider>
    )   
    }
}
