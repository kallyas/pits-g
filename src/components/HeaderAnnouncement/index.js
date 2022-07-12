// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'
import { MDX } from '../mdx'
import * as text from "../../ui/text"
import * as colors from "../../style/colors"
import * as media from "../../style/media"


export default function HeaderAnnouncement({
  data,
  ...props
}) {
  return (
    <StyledTopbar {...props}>
      <TopbarWrapper>
        <MDX>{data}</MDX>
      </TopbarWrapper>
    </StyledTopbar>
  )
}

const StyledTopbar = styled.div`
  min-height: 60px;
  background: ${colors.yellow};
  padding: 20px;
  pointer-events: all;

  p,
  a {
    ${text.paragraph3};
    color: ${colors.darkPurple};
  }

  a {
    text-decoration: underline;
    display: inline-block;
    color: ${colors.darkPurple};
  }

  ${media.mq[1]} {
    > div > span {
      margin-top: 0;
      margin-left: 20px;
    }
  }

  position: relative;
`
const TopbarWrapper = styled.div`
  ${media.mq[1]} {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`
