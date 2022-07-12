// @flow
import styled from '@emotion/styled/macro'
import { Link } from 'gatsby'
import * as React from 'react'

import * as Badge from "../../ui/badge"

import { GlobalLogin } from './GlobalLogin'
import { GlobalProductsDropdown } from './GlobalProducts'

export function GlobalHeaderContents({
  openPositions,
}) {
  return (
    <React.Fragment>
      <GlobalProductsDropdown />
      <GlobalLogin />
      <li>
        <a href="https://toggl.com/blog/" rel="noreferrer" target="_blank">
          Blog
        </a>
      </li>
      <li>
        <Link to="/mission/">Our mission</Link>
      </li>
      <li>
        <LastLink to="/jobs/">
          Working at Toggl
          {openPositions && <Badge.Wrapper>We're hiring</Badge.Wrapper>}
        </LastLink>
      </li>
    </React.Fragment>
  )
}

const LastLink = styled(Link)`
  margin-right: auto !important;
`
