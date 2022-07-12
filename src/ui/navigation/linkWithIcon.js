// @flow

import styled from '@emotion/styled/macro'
import { Link } from 'gatsby'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as fonts from "../../style/fonts"

import * as text from '../text'

export default function LinkWithIcon({
  link,
  imageLink,
  imageAlt,
  title,
  description,
}) {
  return (
    <LinkWrapper to={link}>
      <Icon>
        <img src={imageLink} alt={imageAlt} />
      </Icon>
      <ContentWrapper>
        <Title color={colors.fadedPurple}>{title}</Title>
        <text.P4 color={colors.purple60}>{description}</text.P4>
      </ContentWrapper>
    </LinkWrapper>
  )
}

const Title = styled(text.P2)`
  font-family: ${fonts.gtHaptikMedium};
  margin-bottom: 2px;
`

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 18px;
  &:hover {
    ${Title} {
      font-family: ${fonts.gtHaptikMediumRotalic};
      color: ${colors.fadedPurpleAlt};
    }
  }
`

const Icon = styled.div`
  flex: 0 0 45px;
  max-width: 45px;
  margin-top: 5px;
  img {
    width: 100%;
  }
`

const ContentWrapper = styled.div`
  flex: 1;
`
