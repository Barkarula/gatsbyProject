import React, { Component } from 'react'
import personalData from '../../utils/personalData';
import { FormattedMessage } from "react-intl";
import smoothScroll from '../../utils/scrollTo';
import ymGoal from '../../utils/ymGoal';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount = () => {
        // плохо обращаться напрямую к DOM, минуя React Refs, я знаю, да
        this.skillsHeight = document.querySelector('.skills').getBoundingClientRect().top + document.body.scrollTop
        this.worksHeight = document.querySelector('.works').getBoundingClientRect().top + document.body.scrollTop
    }
    
    render() {
        const contacts = personalData.contacts.map((el, i) => {
        return (
            <a key={i} href={el.link} target="_blank" rel="me" className="footer__contact url uid">
                {el.fullName}
            </a>
        )
    })
    return (
      <footer className="footer">
          <div className="footer__cols">
              <div className="footer__col footer__col--first">
                  <div className="footer__col-item">
                      <a href="/resume.pdf" onClick={ymGoal('resume')} className="footer__link footer__link--main">
                      <FormattedMessage
                        id="footer.cv"
                        />
                      </a>
                  </div>
                  <div className="footer__col-item">
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                        smoothScroll(this.skillsHeight)
                        }} className="footer__link">
                    <FormattedMessage
                  id="footer.myskills"
                  />
                    </a>
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                        smoothScroll(this.worksHeight)}
                        } className="footer__link">
                    <FormattedMessage
                  id="footer.myworks"
                  />
                    </a>
                  </div>
              </div>
              <div className="footer__col footer__col--second">
                  {contacts}
              </div>
              <div className="footer__col footer__col--third">
                  <a href={"mailto:" + personalData.email} className="footer__link--main">
                    {personalData.email}
                    </a>
                    <a href={"tel:" + personalData.phone} className="footer__link--main">
                    {personalData.phone}
                    </a>
              </div>
          </div>
          <div className="copyright">
              <p className="copyright__text">
                  <FormattedMessage
                  id="copyright"
                  />
                  <i className="love">❤</i>
              </p>
          </div>
      </footer>
    )
    }
    
}
