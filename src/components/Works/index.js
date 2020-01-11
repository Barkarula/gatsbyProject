import React, { Component } from 'react'
import { Button } from '../../components/Button'
import FastAverageColor from 'fast-average-color/dist/index.es6'
import personalData from '../../utils/personalData'
import { FormattedMessage } from 'react-intl'
// import { Link, graphql } from 'gatsby'
// import Img from 'gatsby-image'

import sineWave from '../../images/sine-wave.svg'
import eye from '../../images/eye.svg'
import code from '../../images/code.svg'

export default class Works extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workColors: initWorkColors(),
      isShowingAll: false
    }
    this.workRefs = {}
    for (const work of personalData.works) {
      this.workRefs[work.name] = React.createRef()
    }
  }

  getAverageColors = () => {
    for (const work in this.workRefs) {
      const image = this.workRefs[work]
      fac.getColorAsync(
        image,
        { algorithm: 'dominant' }
      )
      .then(function color() {
          this.setState(prevState => {
            return {
              ...prevState,
              workColors: {
                ...prevState.workColors,
                [work]: {
                  bg: color.rgba,
                  isDark: color.isDark,
                },
              },
            }
          })
      }, {algorithm: 'dominant'})
      .catch((err) => {
        console.error(err)
      })
    }
  }

  componentDidMount = () => {
    this.getAverageColors()
    initWorksCarousel()
  }

  toggleShowingAll = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isShowingAll: !prevState.isShowingAll
      }
    })
  }

  render() {
    const works = personalData.works.filter(wrk => this.state.isShowingAll ? true : wrk.cool).map((work, i) => {
      const color = this.state.workColors[work.name]
      const gradientColor = color.bg.replace(/,1\)/g, ',0.87)')
      const bgColor =
        (color.isDark ? darken : ligthen) +
        ' linear-gradient(180deg, rgba(255,255,255,0) 20%,' +
        gradientColor +
        ' 78%)'
      return (
        <div className="work" key={i}>
          <div
            className="work__overlay"
            style={{
              background: bgColor,
            }}
          ></div>
          <img
            src={work.image}
            alt={work.name}
            ref={instance => {
              this.workRefs[work.name] = instance
            }}
            className="work__img"
          />
          <div className="work__inner">
            <p
              className={
                'work__heading' +
                (this.state.workColors[work.name].isDark
                  ? ' work__heading--light'
                  : '')
              }
            >
              <FormattedMessage id={work.name} />
            </p>
            <div className="work__buttons-container">
              {work.link && work.link !== '' && <Button
                small
                newWindow
                icon={eye}
                msgID="button.details"
                link={work.link}
              /> }
              {work.code !== '' && (
                <Button
                  small
                  newWindow
                  secondary
                  icon={code}
                  msgID="button.code"
                  link={work.code}
                />
              )}
            </div>
          </div>
        </div>
      )
    })
    const middleIndex = Math.floor((works.length - 1) / 2) + 1
    const leftWorks = works.slice(0, middleIndex)
    const rightWorks = works.slice(middleIndex, works.length)
    return (
      <section className="works grid">
        <div className="works__text-block grid__item grid__item-left">
          <h3 className="works__heading heading">
            <FormattedMessage id="works.heading" />
          </h3>
          <h6 className="works__desc desc">
            {this.state.isShowingAll && <FormattedMessage id="works.desc" />}
            {!this.state.isShowingAll && <FormattedMessage id="works.desc-2" />}
          </h6>
          <p onClick={() => {this.toggleShowingAll()}} className="link-with-border">
            {!this.state.isShowingAll && <FormattedMessage id="works.show-all" /> }
            {this.state.isShowingAll && <FormattedMessage id="works.hide-all" /> }
          </p>
          <img alt="All of my works." src={sineWave} className="works__wave" />
        </div>
        <div className="works__cols cols grid__item grid__item-right">
          <div className="col work__col col--left">{leftWorks}</div>
          <div className="col work__col col--right">{rightWorks}</div>
        </div>
      </section>
    )
  }
}

const fac = new FastAverageColor()

const initWorkColors = () => {
  let obj = {}
  personalData.works.map(el => {
    obj[el.name] = {
      bg: 'rgba(255,255,255,0.87)',
      isDark: false,
    }
  })
  return obj
}

const darken = 'rgba(0,0,0,0.3)'
const ligthen = 'rgba(255,255,255,0.4)'

let initWorksCarousel = () => {
  let widthTreshold = window.innerWidth > 1044
  if (widthTreshold) {
    let section = document.querySelector('.works')
    const sectionOffsetTop = section.offsetTop
    const columnOffset = window.innerHeight / 5
    let leftCol = document.querySelector('.work__col.col--left')
    let rightCol = document.querySelector('.work__col.col--right')
    let scrollThreshold = window.innerHeight / 3
    const scrollRatio = 0.2
    leftCol.style.transform = 'translateY(' + '-' + columnOffset + 'px)'
    rightCol.style.transform = 'translateY(' + columnOffset + 'px)'
    window.addEventListener('scroll', function step() {
      let scroll = window.scrollY
      let countedValue = scroll - sectionOffsetTop + scrollThreshold
      let condition = countedValue > 0
      if (condition) {
        leftCol.style.transform =
          'translateY(' +
          String(Math.floor(countedValue * scrollRatio - columnOffset)) +
          'px)'
        rightCol.style.transform =
          'translateY(' +
          String(-Math.floor(countedValue * scrollRatio - columnOffset)) +
          'px)'
        requestAnimationFrame(step)
      }
    })
  }
}
