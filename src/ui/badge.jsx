import { css } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'

import * as colors from "../style/colors"
import * as media from "../style/media"
import * as fonts from "../style/fonts"

const sharedStyles = css`
  font-family: ${fonts.gtHaptikMedium};
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  &:hover {
    background: ${colors.fadedPurpleAlt};
    color: ${colors.almostWhite};
  }
`

export const Wrapper = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  padding: 5px 8px;
  border-radius: 5px;
  margin-top: -4px;
  background: ${colors.darkPurple};
  color: ${colors.almostWhite};

  ${sharedStyles};

  ${media.mq[1]} {
    font-size: 11px;
    padding: 2px 5px;
    background: ${colors.almostWhite};
    color: ${colors.darkPurple};
  }
`

export const Small = styled.div`
  line-height: 1;
  font-size: 14px;
  border-radius: 100%;
  text-align: center;
  margin-top: -3px;
  padding: 3px;
  min-width: 20px;
  background: ${colors.almostWhite};
  color: ${colors.darkPurple};
  ${sharedStyles};
`
