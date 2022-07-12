// @flow
import { css } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import duckSrc from './icon-duck.png'
import pcSrc from './icon-pc.png'
import statsSrc from './icon-stats.png'
import timeSrc from './icon-time.png'


export const SectionCallToAction = ({ children, images }) => (
  <Root>
    <ImageStyled src={pcSrc} width="145" height="138" />
    <ContentStyled>
      {images ? (
        <>
          <TopLeftImage>{images.topLeft}</TopLeftImage>
          <TopRightImage>{images.topRight}</TopRightImage>
          <BottomLeftImage>{images.bottomLeft}</BottomLeftImage>
          <BottomRightImage>{images.bottomRight}</BottomRightImage>
        </>
      ) : (
        <>
          <TopLeftImage>{<img src={duckSrc} />}</TopLeftImage>
          <TopRightImage>{<img src={pcSrc} />}</TopRightImage>
          <BottomLeftImage>{<img src={statsSrc} />}</BottomLeftImage>
          <BottomRightImage>{<img src={timeSrc} />}</BottomRightImage>
        </>
      )}

      {children}
    </ContentStyled>
  </Root>
)

const ImageStyled = styled.img`
  height: 138px;
  transform: translateY(50px);
  position: relative;
  z-index: 2;
  ${media.mq[1]} {
    display: none;
  }
`
const ContentStyled = styled.div`
  background-color: ${colors.beige};
  padding: 80px 21px 40px 30px;
  position: relative;
  z-index: 1;

  ${media.mq[2]} {
    height: 380px;

    button {
      margin-top: 40px;
    }
  }
`

const BackgroundImage = css`
  position: absolute !important;
  display: none;
`

const TopLeftImage = styled.div`
  ${BackgroundImage};

  ${media.mq[1]} {
    display: block;
    top: 52px;
    left: 20px;
  }

  ${media.mq[2]} {
    top: 52px;
    left: 80px;
  }
`

const TopRightImage = styled.div`
  ${BackgroundImage};

  ${media.mq[1]} {
    display: block;
    top: 20px;
    right: 20px;
    width: 60px;
  }

  ${media.mq[2]} {
    top: 60px;
    right: 100px;
    width: 80px;
  }
`

const BottomLeftImage = styled.div`
  ${BackgroundImage};

  ${media.mq[1]} {
    display: block;
    bottom: 20px;
    left: -100px;
    width: 430px;
  }

  ${media.mq[2]} {
    bottom: -30px;
    left: -50px;
    width: 630px;
  }
`

const BottomRightImage = styled.div`
  ${BackgroundImage};

  ${media.mq[1]} {
    display: block;
    bottom: 0;
    right: 70px;
  }

  ${media.mq[2]} {
    bottom: 0;
    right: 120px;
  }
`

const Root = styled.div`
  text-align: center;
`
