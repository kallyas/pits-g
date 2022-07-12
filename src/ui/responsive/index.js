// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as media from "../../style/media"



export const MobileOnly = ({ children }) => {
  return <Mobile>{children}</Mobile>
}

export const DesktopOnly = ({ children }) => {
  return <Desktop>{children}</Desktop>
}

const Mobile = styled.div`
  ${media.mq[1]} {
    display: none;
  }
`

const Desktop = styled.div`
  display: none;
  ${media.mq[1]} {
    display: inherit;
  }
`
