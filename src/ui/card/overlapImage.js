// @flow
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"


import * as text from '../text'

export default function OverlapImage({
  image,
  children,
}) {
  return (
    <Root>
      <ImageWrapper>{image}</ImageWrapper>
      <Content>{children}</Content>
    </Root>
  )
}

const Root = styled.div`
  color: ${colors.beige};
  max-width: 1200px;
  margin: auto;
  ${text.paragraph2};
  display: flex;
  flex-direction: column;

  ${media.mq[1]} {
    flex-direction: row;
    align-items: center;
  }

  ul {
    line-height: 1.6;
    margin: 40px 0 0;
  }

  span {
    margin-top: 13px;
    display: block;
    ${text.paragraph2};
  }
`
const ImageWrapper = styled.div`
  line-height: 0;
  img {
    width: 100%;
  }
  margin: 50px 0 0;
  ${media.mq[1]} {
    margin: 0;
    z-index: 30;
    max-width: 30%;
    flex: 1;
  }
`
const Content = styled.div`
  background: ${colors.darkPurple};
  z-index: 20;
  padding: 30px;
  button {
    margin: 0 auto;
  }

  ul {
    padding: 0;
    margin-left: 20px;
  }
  ${media.mq[1]} {
    padding: 5% 5% 5% 20%;
    margin-left: -15%;
    flex: 2;
    button {
      margin: 0;
    }
  }
`
