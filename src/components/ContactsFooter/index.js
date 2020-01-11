import React from 'react'
import { Spring, config } from 'react-spring/renderprops'
import { FormattedMessage } from "react-intl";
import personalData from '../../utils/personalData'
import ymGoal from '../../utils/ymGoal'

export const ContactsFooter = props => {

        const iconContacts = personalData.contacts.map((el,i) => {
            return (
            <a key={i} href={el.link} target="_blank" rel="me" onClick={ymGoal(el.name)} className="contact-icon url uid">
                <img src={el.src} alt={el.name} className="contact-icon__img"/>
            </a>
        )})
        return (
            <Spring
            from={{ transform: "translateY(-10px)",
            opacity: 0 }}
            config={{
                ...config.slow,
                delay: 600
            }}
            to={{ transform: "translateY(0px)",
            opacity: 1 }}>
            {props => (
                <address style={props} className="welcome__contacts contacts vcard">
                <a href={"mailto:" + personalData.email} className="contact">
                    <p className="contact__heading">
                    <FormattedMessage id="contacts.email" />
                    </p>
                    <p className="contact__value email">{personalData.email}</p>
                </a>
                <a href={"tel:" + personalData.phone} className="contact">
                    <p className="contact__heading">
                    <FormattedMessage id="contacts.phone" />
                    </p>
                    <p className="contact__value tel">{personalData.phone}</p>
                </a>
                <div className="contact contacts-icons">
                    {iconContacts}
                </div>
                </address>
            )}
                </Spring>
        )
}
