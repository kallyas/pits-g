// @flow

import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import * as text from '../text'

export const CarouselProgress = ({
  active,
  count,
  ...props
}) => (
  <Root {...props}>
    <Wrapper>
      <Current>0{active + 1} /</Current>
      <OutOf>0{count}</OutOf>
    </Wrapper>
  </Root>
)

const Root = styled.div``

const Wrapper = styled.div`
  margin: 32px auto 0;
  display: flex;
  width: 80%;
  border-top: 1px solid ${colors.beige};
  padding-top: 13px;

  ${media.mq[1]} {
    margin: 25px 0 0;
    width: 100%;
  }
`

const Current = styled.span`
  ${text.paragraph2};
  color: ${colors.beige};
`
const OutOf = styled.span`
  ${text.paragraph2};
  color: ${colors.beige};
  opacity: 0.2;
  padding-left: 4px;
`
