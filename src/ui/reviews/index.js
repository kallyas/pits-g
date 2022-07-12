// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import * as Responsive from '../responsive'


export const Reviews = ({ className, image, mobileImage }) => {
  return (
    <Wrapper className={className}>
      <InnerWrapper>
        <Responsive.DesktopOnly>
          <DesktopWrapper>{image}</DesktopWrapper>
        </Responsive.DesktopOnly>
        <Responsive.MobileOnly>{mobileImage}</Responsive.MobileOnly>
      </InnerWrapper>
    </Wrapper>
  )
}

const InnerWrapper = styled.div`
  background: ${colors.fadedPurpleAlt};
  padding: 35px 30px;
  ${media.mq[1]} {
    margin-top: 50px;
  }
  ${media.mq[2]} {
    margin-top: 100px;
    padding: 40px 30px 35px;
  }
`

const DesktopWrapper = styled.div`
  max-width: 1150px;
  margin-left: auto;
  margin-right: auto;
  ${media.mq[1]} {
    margin-top: -60px;
  }
  ${media.mq[2]} {
    margin-top: -90px;
  }
`
const Wrapper = styled.div`
  background: ${colors.fadedPurple};
  text-align: center;
`
