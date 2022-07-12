// @flow

import styled from '@emotion/styled/macro'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import { heading4, paragraph2 } from '../text'

export default function ImageText({ image, title, paragraph }) {
  return (
    <Root>
      <ImageWrapper>
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
          />
        ) : (
          image
        )}
      </ImageWrapper>
      <TextSection>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </TextSection>
    </Root>
  )
}
const ImageWrapper = styled.div`
  line-height: 0;
  .gatsby-image-wrapper {
    height: 100%;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Paragraph = styled.p`
  ${paragraph2};
  color: ${colors.beige};
  margin-top: 23px;

  ${media.mq[1]} {
    margin-top: 8px;
  }
`

const TextSection = styled.div`
  padding: 30px;
  background-color: ${colors.darkPurple};
  color: ${colors.beige};
  min-height: 200px;

  ${media.mq[1]} {
    padding: 30px 35px 50px;
    &:hover {
      background: ${colors.fadedPurple};
    }
  }
`

const Title = styled.h4`
  ${heading4};
  color: ${(p) => p.theme.primary};
  ${media.mq[1]} {
    margin-bottom: 10px;
  }
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  ${media.mq[1]} {
    width: 345px;
  }
`
