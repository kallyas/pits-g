// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

export const Header = styled('header')`
  width: 100%;
  position: absolute;
  pointer-events: none;
  height: 100%;
  // FIXME: Value set unreasonably high, because of other unreasonable uses of z-index in the codebase.
  z-index: 9999;
`
