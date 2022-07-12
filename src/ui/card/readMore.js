// @flow

import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import * as text from '../text'



export default function ReadMore({
  image,
  category,
  title,
  subtitle,
  link,
  href,
  ...props
}) {
  return (
    <Root {...props}>
      {image && <Image>{image}</Image>}
      <TextSection>
        {category && <Category>{category}</Category>}
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {link && <ButtonReadMore>{link}</ButtonReadMore>}
        {href && <a href={href}>Read more</a>}
      </TextSection>
    </Root>
  )
}

const Image = styled.div`
  line-height: 0;
  img {
    width: 100%;
    height: auto;
  }
`

const TextSection = styled.div`
  padding: 30px 22px 30px 34px;
  background-color: ${colors.beige};
  color: ${colors.darkPurple};
  display: flex;
  flex-direction: column;
  height: 100%;
  button {
    margin-top: 20px;
  }

  ${media.mq[1]} {
    background-color: ${colors.darkPurple};
    color: ${colors.almostWhite};
    padding: 20px 35px 35px 35px;
  }
`

const ButtonReadMore = styled.div`
  margin-top: auto;
  a {
    display: inline-block;
  }
`

const Title = styled(text.H4)`
  margin: 0 0 5px;
  ${media.mq[1]} {
    margin: 15px 0;
  }
`

const Subtitle = styled(text.P2)`
  margin-bottom: 30px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 10px;
  h4,
  p {
    color: ${colors.darkPurple};
  }

  img {
    width: 100%;
    height: auto;
  }

  ${media.mq[1]} {
    h4 {
      color: ${(p) => p.theme.primary};
    }

    p {
      color: ${colors.beige};
    }
  }
`

const Category = styled(text.P3)`
  margin-top: 16px;
  text-transform: capitalize;
  opacity: 0.4;
  ${media.mq[1]} {
    opacity: 1;
  }
`
