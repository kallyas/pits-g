// @flow
import { css } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from '../../style/colors'

import * as text from '../text'

export const inputCss = css`
  background: transparent;
  border: 2px solid ${colors.lightPurple};
  height: 50px;
  padding-left: 15px;
  caret-color: ${colors.darkPurple};
  &::placeholder {
    color: ${colors.lightPurple};
  }

  ${text.paragraph4};
  color: ${colors.beige};
`

export const validatedCss = css`
  background: ${colors.beige};
  color: ${colors.darkPurple} !important;
`

export const LabelWrapper = ({
  children,
  className,
  error,
  label,
}) => {
  return (
    <Root className={className} error={error}>
      <StyledLabelWrapper>{label}</StyledLabelWrapper>
      {children}
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
    </Root>
  )
}

export const ErrorWrapper = styled('div')`
  ${text.paragraph3};
  text-align: left;
  color: ${colors.red};

  :not(:last-child) {
    margin-bottom: 20px;
  }

  :last-child {
    padding-top: 5px;
  }
`

const errorState = css`
  input {
    border-color: ${colors.red};
  }
`

const Root = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 25px;

  &:first-of-type {
    margin-top: 0;
  }

  ${({ error }) => error && errorState}
`

const StyledLabelWrapper = styled.div`
  label {
    display: block;
    text-align: left;
    ${text.paragraph3};
    color: ${colors.beige};
    margin-bottom: 10px;
  }
`
