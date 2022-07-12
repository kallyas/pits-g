// @flow
import { css } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'
import { IconCheck } from '../icons/IconCheck'

import * as colors from "../../style/colors"

import * as text from '../text'

export const Wrapper = ({ children, checkIcon }) => {
  return <Ul checkIcon={checkIcon}>{children}</Ul>
}

export const Item = ({ children }) => {
  return <Li>{children}</Li>
}

export const CheckItem = ({ children }) => {
  return (
    <CheckLi>
      <IconCheck color={colors.beige} />
      {children}
    </CheckLi>
  )
}

const Ul = styled.ul`
  padding-left: 20px;
  margin: 25px 0 40px;
  ${(p) =>
    p.checkIcon &&
    css`
      list-style: none;
      padding-left: 0;
      margin-bottom: 35px;
    `}
`

const Li = styled.li`
  ${text.paragraph2};
  color: ${colors.beige};
  margin: 15px 5px;
`

const CheckLi = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: baseline;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    margin-right: 18px;
    flex-shrink: 0;
  }
`
