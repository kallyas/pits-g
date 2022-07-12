// @flow
import styled from '@emotion/styled'
import * as React from 'react'

import * as media from "../../style/media"

import { SectionBlock } from './SectionBlock'

export const SectionMobileNoBleedBlock = styled(SectionBlock)`
  padding: 0;
  ${media.mq[1]} {
    padding: 60px 30px;
  }
`
