// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import * as Responsive from '../responsive'
import * as text from '../text'

export const Brands = ({
  className,
  title,
  subtitle,
  image,
  mobileImage,
}) => {
  return (
    <Wrapper className={className}>
      {title && <Title color={colors.darkPurple}>{title}</Title>}
      <Responsive.DesktopOnly>
        <DesktopWrapper>
          {subtitle && (
            <Subtitle color={colors.darkPurple}>{subtitle}</Subtitle>
          )}
          {image}
        </DesktopWrapper>
      </Responsive.DesktopOnly>
      <Responsive.MobileOnly>{mobileImage}</Responsive.MobileOnly>
    </Wrapper>
  )
}
const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
  color: ${colors.darkPurple};

  ${media.mq[1]} {
    max-width: 1050px;
  }
`

const Title = styled(text.H3)`
  margin-bottom: 45px;
  ${media.mq[1]} {
    margin-bottom: 35px;
  }
`

const Subtitle = styled(text.P2)`
  margin-bottom: 60px;
  a {
    color: ${colors.darkPurple};
    text-decoration: underline;
  }
`
