// @flow

import styled from '@emotion/styled/macro'
import * as React from 'react'

import { Input } from './Input'
import { IconPswHidden } from '../icons/IconPswHidden'
import { IconPswVisible } from '../icons/IconPswVisible'

import { LabelWrapper } from './styles'


export const Password = ({
  className,
  label,
  error,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  return (
    <LabelWrapper className={className} label={label} error={error}>
      <StyledPasswordWrapper isVisible={isVisible}>
        <Input
          {...{
            ...props,
            type: isVisible ? 'text' : 'password',
          }}
        />
        <ShowHideWrapper onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <IconPswHidden width={35} height={35} />
          ) : (
            <IconPswVisible width={35} height={35} />
          )}
        </ShowHideWrapper>
      </StyledPasswordWrapper>
    </LabelWrapper>
  )
}

const StyledPasswordWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    padding-right: 48px;
  }

  input::-ms-reveal,
  input::-ms-clear {
      display: none;
    }
  }

  input::-webkit-credentials-auto-fill-button, input::-webkit-caps-lock-indicator, input::-webkit-textfield-decoration-container, input::-webkit-contacts-auto-fill-button  {
    visibility: hidden !important;
    display: none !important;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
`

const ShowHideWrapper = styled.div`
  position: absolute;
  user-select: none;
  top: 8px;
  right: 10px;
  cursor: pointer;
`
