// @flow

import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import * as React from 'react'
import { Helmet } from 'react-helmet'

import * as animations from "../../style/animations"
import * as colors from "../../style/colors"
import * as media from "../../style/media"
import * as variables from "../../style/variables"

import { useAutoPlayRef } from '../../hooks/useAutoPlayRef'
import * as Responsive from '../responsive'
import * as text from '../text'


export const Wrapper = ({
  bgImage,
  bgVideo,
  skewed,
  children,
  solidColor,
  ...props
}) => {
  const shouldAutoPlay = useAutoPlayRef()

  return (
    <Root {...props} solidColor={solidColor} skewed={skewed}>
      {bgVideo && (
        <Helmet>
          {bgVideo && (
            <link
              rel="preload"
              href={bgVideo}
              as="video"
              media={media.mqbp[1]}
            />
          )}
        </Helmet>
      )}

      {bgVideo ? (
        <>
          <Responsive.DesktopOnly>
            <VideoWrapper skewed={skewed}>
              <VideoStyled muted loop skewed={skewed} ref={shouldAutoPlay}>
                <source src={bgVideo} />
              </VideoStyled>
              <Mask />
            </VideoWrapper>
          </Responsive.DesktopOnly>
          {bgImage && <Responsive.MobileOnly>{bgImage}</Responsive.MobileOnly>}
        </>
      ) : (
        bgImage
      )}

      {children}
    </Root>
  )
}

export const Root = styled.div`
  position: relative;
  min-height: ${200 - variables.headerHeight}px;

  ${(p) => (p.solidColor ? `background-color: ${p.solidColor};` : '')}

  ${media.mq[1]} {
    margin-top: -${variables.headerHeightFull}px;
  }

  > div > img {
    object-fit: cover;
  }

  > div > img,
  > div > .gatsby-image-wrapper,
  > .gatsby-image-wrapper {
    position: absolute !important;
    width: 100%;
    height: 100%;

    ${({ skewed }) =>
      skewed &&
      css`
        transform: rotate(10deg);
        height: calc(100% - 35px);
      `}

    img {
      mask-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%);
    }
  }

  > div > img {
    mask-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%);
  }
`

const VideoWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  ${({ skewed }) =>
    skewed && 'animation: spinner 1s; height: calc(100% - 150px);'}
  animation-fill-mode: forwards;
  animation-delay: 0.4s;

  @keyframes spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(10deg);
    }
  }

  ${media.mq[3]} {
    ${({ skewed }) => skewed && 'height: calc(100% - 250px);'}
  }
`

const Mask = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`

const VideoStyled = styled.video`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
`

export const ContentWrapper = styled.div`
  position: relative;
  padding: 30px;

  ${(p) =>
    p.center
      ? `p {
    text-align: center;
  }`
      : ''}

  > div:nth-of-type(1) {
    animation: 300ms ease-in-out ${animations.cardUp};
  }

  > div:nth-of-type(2) {
    animation: 500ms ease-in-out ${animations.cardUp};
  }

  > div:nth-of-type(3) {
    animation: 700ms ease-in-out ${animations.cardUp};
  }

  > div:nth-of-type(4) {
    animation: 900ms ease-in-out ${animations.cardUp};
  }

  ${media.mq[0]} {
    padding-top: 100px;
  }

  ${media.mq[1]} {
    margin: ${variables.headerHeightFull * 2.5}px auto 0;
    max-width: 1200px;
    padding-bottom: 60px;
    padding-top: 20px;
  }
`

export const Title = styled(text.H1)`
  color: ${colors.almostWhite};
  margin-bottom: 25px;
  text-align: ${(p) => (p.centered ? 'center' : 'left')};
  em {
    color: ${(p) => p.theme.primary};
  }
`

export const TitleWrapper = styled.div`
  background: ${colors.fadedPurple};
  padding: 45px 0 15px;
  text-align: center;
  h1 {
    color: ${(p) => p.theme.primary};
    text-align: center;
  }
  ${media.mq[1]} {
    padding: 120px 0 0;
  }
`

export const Text = styled(text.P2)`
  margin-top: 10px;
  margin-bottom: 25px;
  width: 100%;
`

export const CtaSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  button,
  a {
    margin-top: 15px;
  }
  ${media.mq[1]} {
    flex-direction: row;
    a:not(:nth-of-type(1)) {
      margin-left: 25px;
    }
  }
`

export const LoginSmallTitle = styled.div`
  ${text.paragraph2};
  color: ${colors.almostWhite};
  text-align: center;
  margin-bottom: 15px;

  ${media.mq[1]} {
    margin-bottom: 30px;
  }
`

export const LoginWrapper = styled(ContentWrapper)`
  ${media.mq[1]} {
    padding: 80px 0;
  }
`

export const ExtraPaddingWrapper = styled(
  ContentWrapper
)`
  ${media.mq[0]} {
    padding-top: 100px;
  }
  ${media.mq[1]} {
    padding-top: 80px;
  }
`

// Must use important for animation here because the previous selector in ContentWrapper is using nth-of-type which is stronger
export const TitleBig = styled.div`
  text-align: center;
  max-width: ${({ spaced }) => (spaced !== false ? '800px' : 'inherit')};
  margin: 0 auto;
  ${({ animated }) =>
    animated !== false ? '' : css(`animation: none !important;`)}

  ${media.mq[1]} {
    margin: ${({ spaced }) =>
      spaced !== false ? '100px auto 80px auto' : '30px auto 0'};
  }

  ${media.mq[2]} {
    margin: ${({ spaced }) =>
      spaced !== false ? '100px auto 80px auto' : '0 auto'};
  }

  p {
    margin: 20px auto;
  }
`

export const AltWrapper = styled(Wrapper)`
  margin-top: ${variables.headerHeight}px !important;
  ${media.mq[1]} {
    padding-top: ${variables.headerHeight}px;
  }
`

export const Form = styled.form`
  margin-top: 40px;

  textarea {
    width: 100%;
  }

  button {
    margin: 40px auto;
  }

  ${media.mq[1]} {
    button {
      margin: 40px 0;
      width: 100%;
      text-align: center;
      display: block;
    }
  }
`
