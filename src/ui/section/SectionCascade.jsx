// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import { useMediaQuery } from '../hooks/useMediaQuery'
import * as text from '../text'

const LEFT_OFFSET = 50
const TOP_OFFSET = 270

export const Wrapper = ({
  children,
  className,
}) => {
  const left = React.useRef(null)
  const right = React.useRef(null)
  const [offsetTop, setOffsetTop] = React.useState(0)
  const isDesktop = useMediaQuery(media.mqbp[1])

  React.useEffect(() => {
    if (!isDesktop) {
      setOffsetTop(0)
      return
    }

    if (right.current && left.current) {
      const offset = left?.current?.offsetHeight - right?.current?.offsetHeight

      if (offset < 0) {
        setOffsetTop(0)
      } else {
        setOffsetTop(offset)
      }
    }
  }, [left, right, isDesktop])

  return (
    <Root offsetTop={offsetTop} className={className}>
      <CascadeWrapper>
        <div ref={left}>{children[0]}</div>
        <div ref={right}>{children[1]}</div>
      </CascadeWrapper>
    </Root>
  )
}


export const Left = ({ background, children, header, className }) => (
  <LeftSection background={background} className={className}>
    <LeftHeader>{header}</LeftHeader>
    {children}
  </LeftSection>
)

const Root = styled.div`
  ${media.mq[2]} {
    padding-bottom: ${(p) => TOP_OFFSET - p.offsetTop}px;
  }
`

const CascadeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mq[2]} {
    padding: 20px 0 20px;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 0 auto;
  }
`

const LeftSection = styled('div')`
  background: ${({ background, theme }) => background || theme.accent};
  padding: 55px 45px;
  color: ${colors.darkPurple};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  color: ${(p) => p.textColor || colors.darkPurple};
  background: ${(p) => p.background || colors.beige};
  z-index: 2;
  position: relative;
  ${media.mq[2]} {
    max-width: 620px;
    background: ${({ background, theme }) => background || theme.primary};
    padding: 55px 70px 60px;
    margin-left: ${LEFT_OFFSET}px;
  }
`

const LeftHeader = styled.div`
  ${text.heading3};

  margin: 0 auto;
  color: ${colors.darkPurple};
  h2 {
    text-align: center;
    margin-bottom: 15px;
  }

  ${media.mq[2]} {
    ${text.heading2};
    color: ${colors.darkPurple};
    h2 {
      text-align: inherit;
      width: 90%;
    }
  }
`

export const Right = ({ background, children, header, className }) => (
  <RightSection background={background} className={className}>
    <RightHeader>{header}</RightHeader>
    {children}
  </RightSection>
)

const RightSection = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 30px;
  max-width: 800px;
  margin: 0 auto;
  color: ${(p) => p.textColor || colors.darkPurple};
  background: ${(p) => p.background || colors.beige};
  text-align: center;

  button {
    margin: 0 auto;
  }
  ${media.mq[2]} {
    padding: 60px 100px;
    text-align: inherit;
    z-index: 1;
    width: 100%;
    transform: translate(-${LEFT_OFFSET}px, ${TOP_OFFSET}px);
    button {
      margin: 0;
    }
    background: ${(p) => p.background || colors.beige};
    color: ${(p) => p.textColor || colors.darkPurple};
    padding: 50px 50px 50px 130px;
    max-width: 580px;
  }
`

const RightHeader = styled.div`
  ${text.heading3};
  margin-bottom: 15px;
`
