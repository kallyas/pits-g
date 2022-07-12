// @flow

import styled from '@emotion/styled/macro'
import { Link } from 'gatsby'
import * as React from 'react'


import * as colors from "../../style/colors"
import * as fonts from "../../style/fonts"

import * as text from '../text'


export const Underlined = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>
}

const Root = styled.span`
  border-bottom: 1px solid ${(p) => p.theme.primary};
  display: inline-block;
  &:hover {
    color: ${(p) => p.theme.primary};
  }
`

export const Long = styled(Link)`
  ${text.defaultText};
  padding: 20px !important;
  background-size: 100% 200%;
  background-image: linear-gradient(
    to bottom,
    ${colors.pink10} 50%,
    ${colors.almostWhite} 50%
  );
  background-position: 0 -100%;
  transition: background-position 0.15s ease-in-out;
  display: flex;
  column-gap: 20px;
  width: 100% !important;
  max-width: 100% !important;
  margin-top: 20px;
  svg {
    transform: scaleX(-1);
    width: 30px;
    margin-left: auto;
  }
  &:hover {
    background-position: 0 0;
    font-family: ${fonts.gtHaptikMediumRotalic};
  }
`
