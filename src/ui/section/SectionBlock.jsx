// @flow
import { css } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

export const SectionBlock = ({
  center,
  children,
  flex,
  gap,
  justifyCenter,
  ...props
}) => (
  <Root {...props}>
    <Wrapper
      center={center}
      justifyCenter={justifyCenter}
      flex={flex}
      gap={gap}
    >
      {children}
    </Wrapper>
  </Root>
)

const Root = styled.div`
  padding: 30px;
  background: ${(p) => p.background || colors.fadedPurple};

  ${media.mq[1]} {
    padding: 60px 30px;
  }
  ${media.mq[2]} {
    padding: 80px 30px;
  }
`

const flex = ({ flex, gap, justifyCenter }) =>
  flex
    ? css`
        display: flex;
        justify-content: ${justifyCenter ? 'center' : 'space-between'};
        flex-direction: column;
        ${gap && `gap: ${gap};`}

        ${media.mq[1]} {
          flex-direction: row;
        }
      `
    : ''

const center = ({ center }) =>
  center
    ? css`
        h1,
        h2,
        h3 {
          text-align: center;
        }

        text-align: center;
      `
    : ''

const Wrapper = styled.div`
  ${flex};
  ${center};
  margin: 0 auto;

  ${media.mq[1]} {
    max-width: 1200px;
  }
`
