// @flow

import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import { Logo } from '../logos'
import * as text from '../text'

export function Product({
  img,
  title,
  description,
  mediaWidth,
  mediaHeight,
}) {
  return (
    <StyledProduct>
      {typeof img === 'string' && (
        <img
          src={img}
          alt={description}
          width={mediaWidth}
          height={mediaHeight}
        />
      )}
      {typeof img !== 'string' && img}

      <div>
        <Title>
          {typeof title === 'string' &&
          ['track', 'plan', 'hire'].includes(title) ? (
            // $FlowFixMe[incompatible-cast] Add %check function.
            <Logo kind={(title)} dark />
          ) : (
            title
          )}
        </Title>
        <text.P3 color={colors.fadedPurpleAlt}>{description}</text.P3>
      </div>
    </StyledProduct>
  )
}

const Title = styled(text.H5)`
  color: ${colors.darkPurple};
  svg {
    height: 28px;
    margin-top: 8px;
  }
`

export const ProductsGroup = styled.div`
  width: 100%;
  a {
    display: block;
    margin-bottom: 20px;
    &:hover img {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    }
  }

  ${media.mq[1]} {
    display: flex;
    a {
      flex: 1;
      max-width: 350px;
      margin: 0 20px 0 0;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`

const StyledProduct = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  & > img {
    width: 40%;
    max-width: 140px;
    height: auto;
  }

  ${media.mq[1]} {
    display: inline-block;
    width: 100%;
    & > img {
      width: 100%;
      max-width: none;
      margin-bottom: 15px;
      padding: 8px;
      background: ${colors.almostWhite};
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
      transition: 0.5s ease;
    }
  }
`
