import React, { Component } from 'react'
import personalData from '../../utils/personalData'
import { Spring, config } from 'react-spring/renderprops'
import { InView } from 'react-intersection-observer'
import grayLine from '../../images/gray-line.svg'
import { FormattedMessage } from "react-intl";

export default class Skills extends Component {
    componentDidMount = () => {
        initSkillsCarousel()
    }
  
  render() {
    const skills = personalData.skills.map((skill, i) => {
        return (
            <div
            className="skill"
            style={{
              opacity: skill.low ? '0.6' : '1'
            }}
            key={i}>
            <div className="skill__inner">
                <img 
                src={skill.image}
                className="skill__img"
                alt={skill.name} />
                <span className="skill__heading">{skill.name}</span>
                <span className="skill__desc">{skill.desc}</span>
            </div>
            </div>
        )
    })
    return (
      <>
      <section className="skills">
            <InView triggerOnce>
                {({ inView, ref }) => (
                    <Spring
                    config={{
                        ...config.molasses
                    }}
                    to={{ opacity: inView ? 1 : 0 }}>
                    {props => (
                    <h3
                    ref={ref}
                    style={props}
                    className="skills__bg-text">
                    <FormattedMessage id="skills.bg-text" />
                    </h3>
                    )}
                    </Spring>
                )}
                </InView>
            
            <div className="skills__container">
                <div className="skills__inner">
                {skills}
                </div>
            </div>
           </section>
           <img
            className="skills__wave"
            src={grayLine}
            />
      </>
    )
  }
}


let initSkillsCarousel = () => {
    let section = document.querySelector('.skills')
    const sectionOffsetTop = section.offsetTop
    let container = document.querySelector('.skills__inner')
    let scrollThreshold = window.innerHeight / 3
    let deltaOffset = 0
    let x = 0
    let nextX = 0
    let posInitial = 0
    let posFinal = 0
    window.addEventListener("scroll", function (event) {
        let scroll = this.scrollY;
        let condition = scroll - sectionOffsetTop + scrollThreshold > 0
        // console.log(condition, scroll, sectionOffsetTop)
        if (condition) {
            container.scrollLeft = (scroll - sectionOffsetTop + posFinal + scrollThreshold) * 1
        } else {
            // console.log(false)
        }
    });
    let dragAction = function (e) {
        e = e || window.event;
        if (e.type == 'touchmove') {
          nextX = x - e.touches[0].clientX;
          x = e.touches[0].clientX;
        } else {
          nextX = x - e.clientX;
          x = e.clientX;
        }
        container.scrollLeft = container.scrollLeft + nextX;
        posFinal = Math.max(container.scrollLeft, 0)
      }
    let dragStart = function (e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = container.scrollLeft;
        
        if (e.type == 'touchstart') {
          x = e.touches[0].clientX;
        } else {
          x = e.clientX;
          container.onmousemove = dragAction;
        }
    }
    let dragEnd = function (e) {
        container.scrollLeft = posFinal;
        container.onmousemove = null
    }
    container.onmousedown = dragStart;
    container.onmouseup = dragEnd;
    
    // Touch events
    container.addEventListener('touchstart', dragStart);
    container.addEventListener('touchend', dragEnd);
    container.addEventListener('touchmove', dragAction);
    }