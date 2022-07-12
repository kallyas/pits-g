// @flow

import { css } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as fonts from "../style/fonts"
import * as fontSizes from "../style/fontSizes"
import * as lineHeights from "../style/lineHeight"

export const defaultText = css`
  font-family: ${fonts.gtHaptikMedium};
  font-size: ${fontSizes.defaultText};
`

const paragraph = css`
  font-family: ${fonts.inter};
  font-weight: 400;
`

export const paragraph1 = css`
  line-height: ${lineHeights.paragraph1};
  font-size: clamp(
    ${fontSizes.paragraph1} * 0.8,
    1.65vw,
    ${fontSizes.paragraph1}
  );
`

export const paragraph2 = css`
  line-height: ${lineHeights.paragraph2};
  font-size: clamp(
    ${fontSizes.paragraph2} * 0.9,
    1.25vw,
    ${fontSizes.paragraph2}
  );
`

export const paragraph3 = css`
  line-height: ${lineHeights.paragraph3};
  font-size: clamp(
    ${fontSizes.paragraph3} * 0.95,
    1vw,
    ${fontSizes.paragraph3}
  );
`

export const paragraph4 = css`
  font-size: ${fontSizes.paragraph4};
  line-height: ${lineHeights.paragraph4};
`

export const paragraph5 = css`
  font-size: ${fontSizes.paragraph5};
  line-height: ${lineHeights.paragraph5};
`

export const offerText = css`
  ${defaultText};
  font-size: 1.2rem;
`

export const offerLink = css`
  ${paragraph};
  font-size: 0.8rem;
`

const heading = css`
  font-family: ${fonts.gtHaptikMedium};
  font-weight: 400;
  em {
    font-family: ${fonts.gtHaptikMediumRotalic};
  }
`

export const heading1 = css`
  ${heading};
  line-height: ${lineHeights.heading1};
  font-size: clamp(${fontSizes.heading1} * 0.5, 4.9vw, ${fontSizes.heading1});
`

export const heading2 = css`
  ${heading};
  line-height: ${lineHeights.heading2};
  font-size: clamp(${fontSizes.heading2} * 0.55, 3.5vw, ${fontSizes.heading2});
`

export const heading3 = css`
  ${heading};
  line-height: ${lineHeights.heading3};
  font-size: clamp(${fontSizes.heading3} * 0.8, 2.5vw, ${fontSizes.heading3});
`

export const heading4 = css`
  ${heading};
  font-size: clamp(${fontSizes.heading4} * 0.8, 2vw, ${fontSizes.heading4});
  line-height: ${lineHeights.heading4};
`

export const heading5 = css`
  ${heading};
  font-size: clamp(${fontSizes.heading5}, 1.5vw, ${fontSizes.heading5} * 1.1);
  line-height: ${lineHeights.heading5};
`

export const rotalic = css`
  font-family: ${fonts.gtHaptikMediumRotalic};
`

const headingStyles = {
  medium: heading2,
  small: heading3,
}

const withColor = (props) =>
  props.color ? `color: ${props.color};` : ''

export const H1 = styled.h1`
  ${withColor}
  ${(p) => (p.size ? headingStyles[p.size] : heading1)}
`

export const H2 = styled.h2`
  ${withColor}
  ${heading2};
`

export const H3 = styled.h3`
  ${withColor}
  ${heading3};
`

export const H4 = styled.h4`
  ${withColor}
  ${heading4};
`

export const H5 = styled.h5`
  ${withColor}
  ${heading5};
`

export const P1 = styled.p`
  ${withColor}
  ${paragraph1};
`

export const P2 = styled.p`
  ${withColor}
  ${paragraph2};
`

export const P3 = styled.p`
  ${withColor}
  ${paragraph3};
`

export const P4 = styled.p`
  ${withColor}
  ${paragraph4};
`

export const UppercaseOneLiner = styled.p`
  ${withColor}
  font-family: ${fonts.gtHaptikMedium};
  font-size: clamp(
    ${fontSizes.paragraph3} * 0.95,
    1vw,
    ${fontSizes.paragraph3}
  );
  text-transform: uppercase;
  letter-spacing: 0.25px;
`

export const Strong = styled.strong`
  ${withColor}
  font-weight: 700;
`

export const Rotalic = styled.span`
  ${withColor}
  font-family: ${fonts.gtHaptikMediumRotalic};
`

export const Wrapper = styled.div`
  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p {
    margin-top: 20px;
  }
`
