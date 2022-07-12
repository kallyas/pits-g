// @flow

import { keyframes } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'
import SwipeListener from 'swipe-listener'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import * as Button from '../button'
import { useMediaQuery } from '../hooks/useMediaQuery'
import * as text from '../text'

import { CarouselProgress } from './CarouselProgress'

const ANIMATION_CLASSNAMES = {
  MOVE_FORWARD: 'move-forward',
  MOVE_FORWARD_FIRST: 'move-forward-first',
  MOVE_BACKWARD: 'move-backward',
  MOVE_REVERSE: 'move-reverse',
}

const getAnimationClass = (isAnimationStarted, index, isBackPressed) => {
  if (isAnimationStarted) {
    if (isBackPressed) {
      if (index === 0) {
        return ANIMATION_CLASSNAMES.MOVE_FORWARD_FIRST
      } else if (index === 1) {
        return ANIMATION_CLASSNAMES.MOVE_FORWARD
      } else {
        return ANIMATION_CLASSNAMES.MOVE_BACKWARD
      }
    } else {
      if (index === 0) {
        return ANIMATION_CLASSNAMES.MOVE_BACKWARD
      } else if (index === 1) {
        return ANIMATION_CLASSNAMES.MOVE_FORWARD_FIRST
      } else {
        return ANIMATION_CLASSNAMES.MOVE_FORWARD
      }
    }
  }
  return ''
}

export const Carousel = ({ children, title, subtitle, button }) => {
  const [active, setActive] = React.useState(0)
  const isDesktop = useMediaQuery(media.mqbp[1])
  const swipeArea = React.useRef(null)
  const childrenRef = React.useRef(React.Children.toArray(children))
  const [isBackPressed, setIsBackPressed] = React.useState(false)
  const [startAnimation, setStartAnimation] = React.useState(false)

  const setActiveRef = (cb, isBackPressed) => {
    setStartAnimation(false)
    setActive(cb)
    let [firstChild, ...childrenArray] = childrenRef.current

    if (isBackPressed) {
      const newChildrenRef = [...childrenRef.current]
      const firstChild = newChildrenRef[newChildrenRef.length - 1]
      newChildrenRef.pop()
      newChildrenRef.unshift(firstChild)

      childrenRef.current = newChildrenRef
    } else {
      childrenArray.push(firstChild)
      childrenRef.current = childrenArray
    }
    setIsBackPressed(false)
  }

  const count = React.Children.count(children)

  const swipeRight = () => {
    setActiveRef((current) => {
      if (current === 0) {
        return count - 1
      } else {
        return (current - 1) % count
      }
    }, true)
  }

  const swipeLeft = () => {
    setActiveRef((current) => (current + 1) % count, false)
  }

  const onRightArrowClick = () => {
    if (startAnimation) {
      return
    }
    setStartAnimation(true)
  }

  const onLeftArrowClick = () => {
    if (startAnimation) {
      return
    }
    setStartAnimation(true)
  }

  React.useEffect(() => {
    const swipeAreaEl = swipeArea.current
    const swipe = (e) => {
      var directions = e.detail.directions

      if (directions.left) {
        onLeftArrowClick()
      }

      if (directions.right) {
        setIsBackPressed(true)
        onRightArrowClick()
      }
    }
    SwipeListener(swipeArea.current)
    swipeAreaEl?.addEventListener('swipe', swipe)

    return () => swipeAreaEl?.removeEventListener('swipe', swipe)
  }, [swipeLeft, swipeRight])

  const windowObj = typeof window !== 'undefined' ? window : {}

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      onRightArrowClick()
    } else if (e.key === 'ArrowLeft') {
      setIsBackPressed(true)
      onLeftArrowClick()
    }
  }

  return (
    <Root onKeyDown={handleKeyDown}>
      <LeftSection>
        <text.H3>{title}</text.H3>
        <Subtitle>{subtitle}</Subtitle>
        {button}
        {isDesktop ? (
          <>
            <Controls>
              <Button.Circle
                onClick={onRightArrowClick}
                side={'right'}
                arrowColor={colors.darkPurple}
              />
            </Controls>
            <StyledProgress active={active} count={count} />
          </>
        ) : null}
      </LeftSection>
      <div ref={swipeArea}>
        <Slides active={active} screenWidth={windowObj?.screen?.availWidth}>
          {childrenRef.current.map((item, index) => (
            <Slide
              className={
                getAnimationClass(startAnimation, index, isBackPressed) +
                ' ' +
                (isBackPressed ? ANIMATION_CLASSNAMES.MOVE_REVERSE : '')
              }
              {...(index === 2 && {
                onAnimationEnd: isBackPressed ? swipeRight : swipeLeft,
              })}
              key={index}
              active={active}
              number={index}
            >
              {item}
            </Slide>
          ))}
        </Slides>
      </div>
      {!isDesktop && <StyledProgress active={active} count={count} />}
    </Root>
  )
}

const moveForward = keyframes`
  0% {
    transform: translateX(calc(100% + 20px));
    z-index: 100;
  }

  100% {
    transform: translateX(0%);
    z-index: 100;
  }
`
const moveForwardFirst = keyframes`
  0% {
    transform: translateX(calc(100% + 20px));
    z-index: 100;
  }
  60% {
   transform: translateX(10%);
    z-index: 100;
  }
  100% {
    transform: translateX(0%);
    z-index: 100;
  }
`
const moveBackward = keyframes`
  0% {
    position: absolute;
  }
  15% {
    position: absolute;    
    transform: scale(0.95) rotate(3deg);
  }
  60% {
    position: absolute;    
    transform: scale(0.80) rotate(3deg) translateX(100%);
    right: 40%;
  }
  70% {
    position: absolute;    
    transform: scale(0.80) rotate(3deg) translateX(100%);
    right: 20%;
  }
  80% {
    position: absolute;    
    transform: scale(0.80) rotate(3deg) translateX(100%);
    right: 0%;
  }
  90% {
    position: absolute;    
    transform: scale(0.80) rotate(3deg) translateX(100%);
    right: -20%;
  }
  100% {
    position: absolute;
    transform: scale(0.80) rotate(3deg) translateX(100%);
    right: -100%;
  }
`

const StyledProgress = styled(CarouselProgress)`
  width: 220px;
`

const Controls = styled.div`
  margin-top: auto;
`

const Subtitle = styled(text.P3)`
  margin: 20px 0 30px;
  a {
    text-decoration: underline;
    &:hover {
      color: ${(p) => p.theme.primary};
    }
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mq[1]} {
    width: 350px;
    min-width: 350px;
    margin-right: 60px;
  }
`

const Slide = styled.div`
  width: 21.5rem;
  max-width: 280px;
  ${media.mq[1]} {
    max-width: 345px;
  }
  &.${ANIMATION_CLASSNAMES.MOVE_BACKWARD} {
    animation: ${moveBackward} 0.5s ease-in 0s 1 normal;
    animation-fill-mode: forwards;
  }
  &.${ANIMATION_CLASSNAMES.MOVE_FORWARD} {
    animation: ${moveForward} 0.5s ease-in-out 0s 1 normal;
    animation-fill-mode: forwards;
  }
  &.${ANIMATION_CLASSNAMES.MOVE_FORWARD_FIRST} {
    animation: ${moveForwardFirst} 0.5s ease-out 0s 1 normal;
    animation-fill-mode: forwards;
  }

  &.${ANIMATION_CLASSNAMES.MOVE_REVERSE} {
    animation-direction: reverse;
  }
`

const Slides = styled.div`
  display: flex;
  position: relative;
  min-height: 480px;
  ${Slide} {
    margin-right: 10px;
    flex: 1;
    > a {
      display: block;
      height: 100%;
      > div,
      > div > div {
        height: 100%;
        line-height: 0;
      }
    }
  }
`

const Root = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${media.mq[1]} {
    flex-direction: row;
    max-width: 1200px;
    overflow: visible;
  }
`
