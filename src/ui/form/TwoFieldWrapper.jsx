// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as media from '../../style/media'

export const TwoFieldWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  ${media.mq[1]} {
    flex-direction: row;
    > div:first-of-type,
    > button:first-of-type {
      margin-right: 20px;
    }
    > button {
      margin-bottom: 30px;
    }
  }
`
