// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

import { ErrorWrapper } from './styles'



export const Form = ({
  children,
  error,
  onSubmit,
  className,
  ...props
}) => {
  return (
    <StyledForm onSubmit={onSubmit} className={className} {...props}>
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
      {children}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  input,
  select {
    width: 100%;
  }

  button {
    margin-top: 30px;
    width: 100%;
    justify-content: center;
  }
`
