import React from 'react'
import { FormattedMessage } from "react-intl";

export const Button = props => {
  const classNames = ['button']
  const link = props.link ? props.link : "#"
  if (props.secondary) classNames.push('button--secondary')
  if (props.small) classNames.push('button--small')
    return (
      <a
      href={link}
      target={props.newWindow ? "_blank" : "_self"}
      onClick={props.onPress}
      className={classNames.join(' ')}>
        {props.icon &&
        <img src={props.icon} alt="icon" className="button__icon" /> }
        <span className="button__text">
        <FormattedMessage id={props.msgID} />
        </span>
      </a>
    )
}