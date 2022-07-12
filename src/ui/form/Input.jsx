// @flow

import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from '../../style/colors'

import { LabelWrapper, inputCss, validatedCss } from './styles'

export const Input = ({
  className,
  label,
  error,
  placeholder,
  type,
  id,
  name,
  value,
  ...props
}) => (
  <LabelWrapper className={className} label={label} error={error}>
    <StyledInput
      {...props}
      id={id}
      validated={value && error === null}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  </LabelWrapper>
)

const StyledInput = styled.input`
  ${inputCss};
  ::placeholder {
    color: inherit;
    opacity: 0.65;
  }
  &:focus {
    border-color: ${colors.beige};
    background: ${colors.beige};
    color: ${colors.darkPurple};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 24px ${colors.beige} inset !important;
  }

  ${(p) => (p.validated ? validatedCss : '')};
`
