// @flow

import { css } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"


export const IconArrowBigLeft = ({ color }) => (
  <svg viewBox="0 0 34 16">
    <g fill="none">
      <path fill={color || '#412A4C'} d="M2 7v2h32V7z" />
      <path
        d="M7.5 2L1.677 7.823M7.5 14L1.677 8.177"
        stroke={color || '#412A4C'}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </g>
  </svg>
)

const arrow = css`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 5px;
`

export const IconArrowDown = styled.div`
  ${arrow};

  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`
export const IconArrowUp = styled.div`
  ${arrow};

  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`

export const IconArrowDownThin = styled.div`
  display: inline-block;
  margin-left: 6px;
  margin-bottom: 1px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${colors.darkPurple};
`

const icon = ({ dark }) => css`
  margin-left: 10px;
  width: 0;
  height: 0;

  border-color: ${dark ? colors.darkPurple : colors.almostWhite};
`

export const IconDown = styled.div`
  ${icon};
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid;
`

export const IconUp = styled.div`
  ${icon};
  border-bottom: 4px solid;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
`

export const IconRight = styled.div`
  ${icon};
  border-left: 4px solid;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
`
