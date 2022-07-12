// @flow

import styled from '@emotion/styled/macro'
import { withPrefix } from 'gatsby'
import * as React from 'react'

import * as colors from '../../style/colors'
import * as media from '../../style/media'

import * as Badge from '../badge'
import * as Responsive from '../responsive'
import { heading5, paragraph3, paragraph4 } from '../text'


export function Wrapper({
  children,
  logo,
  products,
  Link,
  openPositions,
}) {
  const hasChildren = !!children
  return (
    <Root>
      <DesktopWrapper hasChildren={hasChildren}>
        <LogoAndList>
          <Responsive.DesktopOnly>
            <LogoWrapper>{logo}</LogoWrapper>
          </Responsive.DesktopOnly>

          <Lists>
            <Responsive.MobileOnly>
              <LogoWrapper>{logo}</LogoWrapper>
            </Responsive.MobileOnly>
            <List title="Toggl Global">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://toggl.com/blog/"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/mission/">Our Mission</Link>
              </li>
              <li>
                <Link to="/jobs/">
                  Working at Toggl
                  {openPositions && <Badge.Small>{openPositions}</Badge.Small>}
                </Link>
              </li>
              <li>
                <Link to="/track/legal/terms/">Legal Terms</Link>
              </li>
            </List>
            {!hasChildren && <TogglTrackLinks Link={Link} />}
            {children}
          </Lists>
        </LogoAndList>
        <RootProducts hasChildren={hasChildren}>
          <ProductsTitle hasChildren={hasChildren}>
            {hasChildren
              ? 'Discover other Toggl tools:'
              : 'Discover all three Toggl tools:'}
          </ProductsTitle>
          <Logos hasChildren={hasChildren}>
            {hasChildren
              ? React.Children.map(products, (item) => <Logo>{item}</Logo>)
              : products}
          </Logos>
        </RootProducts>
      </DesktopWrapper>
      <Bottom>
        <span>
          &#169; {new Date().getFullYear()} Toggl. All rights reserved.
        </span>
      </Bottom>
    </Root>
  )
}

const TogglTrackLinks = ({ Link }) => (
  <React.Fragment>
    <List title="Toggl Track">
      <li>
        <Link to={'/track/features/'}>Features</Link>
      </li>
      <li>
        <Link to={'/track/pricing/'}>Pricing</Link>
      </li>
      <li>
        <Link to={'/track/integrations/'}>Integrations</Link>
      </li>
      <li>
        <Link to={'/track/customers/'}>Case Studies</Link>
      </li>
      <li>
        <Link to={'/track/mobile-time-tracking-app/'}>Mobile Apps</Link>
      </li>
      <li>
        <Link to={'/track/toggl-desktop/'}>Desktop Apps</Link>
      </li>
      <li>
        <Link to={'/track/anti-surveillance-statement/'}>
          Anti-surveillance
        </Link>
      </li>
      <li>
        <a
          href={'https://support.toggl.com/en/'}
          target="_blank"
          rel="noreferrer"
        >
          Knowledge Base
        </a>
      </li>
      <li>
        <Link to={'/track/timesheet-templates/'}>Timesheet Templates</Link>
      </li>
    </List>
    <List title="Toggl Plan">
      <li>
        <a href={withPrefix('/plan/product')}>Product</a>
      </li>
      <li>
        <a href={withPrefix('/plan/pricing')}>Pricing</a>
      </li>
      <li>
        <a href={withPrefix('/plan/flexible-project-management')}>Solutions</a>
      </li>
      <li>
        <a href={withPrefix('/plan/customer-stories')}>Customer Stories</a>
      </li>
      <li>
        <a href={withPrefix('/plan/resources-and-links')}>Project Management</a>
      </li>
      <li>
        <a
          href="https://support.plan.toggl.com/"
          target="_blank"
          rel="noreferrer"
        >
          Knowledge Base
        </a>
      </li>
    </List>
    <List title="Toggl Hire">
      <li>
        <a href={withPrefix('/hire/product')}>Product</a>
      </li>
      <li>
        <a href={withPrefix('/hire/pricing')}>Pricing</a>
      </li>
      <li>
        <a href={withPrefix('/hire/skills-tests')}>Skills Tests</a>
      </li>
      <li>
        <a href={withPrefix('/hire/customer-stories')}>Customer Stories</a>
      </li>
      <li>
        <a href={withPrefix('/hire/candidate-experience')}>
          Candidate Experience
        </a>
      </li>
      <li>
        <a href={withPrefix('/hire/manifesto')}>Manifesto</a>
      </li>
      <li>
        <a
          href="https://support.hire.toggl.com/en/"
          target="_blank"
          rel="noreferrer"
        >
          Knowledge Base
        </a>
      </li>
    </List>
    <List title="Resources">
      <li>
        <Link to={'/fun-and-games/'}>Fun & Games</Link>
      </li>
      <li>
        <a href={withPrefix('/work-from-home/')}>Work From Home Hub</a>
      </li>
      <li>
        <Link to={'/track/time-management/'}>Time Management Hub</Link>
      </li>
      <li>
        <Link to={'/track/business-resources/'}>Business Resources</Link>
      </li>
      <li>
        <Link to={'/track/productivity-resources/'}>
          Productivity Resources
        </Link>
      </li>
      <li>
        <a href={withPrefix('/plan/blueprint-the-expectations-game/')}>
          Blueprint Magazine
        </a>
      </li>
      <li>
        <a href={withPrefix('/timesheets-magazine/')}>Timesheets Magazine</a>
      </li>
    </List>
  </React.Fragment>
)

export function List({
  title,
  children,
}) {
  return (
    <RootList>
      <Title>{title}</Title>
      <Ul>{children}</Ul>
    </RootList>
  )
}

const Logo = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoAndList = styled.div`
  ${media.mq[1]} {
    padding: 30px;
  }
  ${media.mq[2]} {
    padding: 45px 30px;
  }
`

const ProductsTitle = styled.p`
  ${paragraph4};

  ${media.mq[1]} {
    width: 100%;
    ${paragraph3};
    margin-right: 80px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  ${media.mq[2]} {
    max-width: 150px;
    margin-bottom: 0;
  }
`

const DesktopWrapper = styled.div`
  ${media.mq[1]} {
    display: flex;
    background: ${colors.darkPurple};
    flex-direction: column;
  }
`

const Root = styled.div`
  color: ${colors.almostWhite};
  z-index: 100;
  position: relative;

  svg {
    height: 28px;
    display: block;
    margin: 5px 0;
  }

  svg + span {
    display: block;
  }
`

const RootProducts = styled.div`
  padding: 25px 30px;
  background: ${(p) =>
    p.hasChildren ? colors.fadedPurple : colors.darkPurple};
  ${ProductsTitle} {
    opacity: 1;
  }
  span {
    ${paragraph4};
    margin-bottom: 5px;
  }

  ${media.mq[1]} {
    display: flex;
    flex-wrap: wrap;
    background-color: ${colors.fadedPurple};
    span {
      line-height: 1.1;
      display: inline-block;
    }
  }
  ${media.mq[2]} {
    padding: 0 40px;
    flex-wrap: nowrap;
    height: 110px;
  }
`

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  img + span {
    margin-top: 5px;
  }
  > *:not(:last-of-type) {
    margin-bottom: 30px;

    ${media.mq[1]} {
      margin-bottom: 0;
      margin-right: 80px;
    }
  }
  ${media.mq[1]} {
    margin-top: 0;
    flex-direction: row;
    align-items: center;
  }
`

const Title = styled.h5`
  ${heading5};
  text-transform: uppercase;
  font-size: 92%;
  margin: 10px 0 6px;
  letter-spacing: 0.5px;
  opacity: 0.6;
  ${media.mq[1]} {
    margin-bottom: 15px;
  }
`
const RootList = styled.div`
  padding-right: 20px;
  padding-left: 10px;
  min-width: 12rem;
  flex: 1;
  ${media.mq[1]} {
    flex: 0 1 calc(100% / 3);
  }
  ${media.mq[2]} {
    flex: 1;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

const Bottom = styled.div`
  background: ${(p) => p.theme.primary};
  height: 70px;
  padding: 40px;
  ${paragraph4};
  align-items: center;
  display: flex;
  color: ${colors.darkPurple};

  ${media.mq[1]} {
    padding: 20px 40px;
    height: 52px;
  }
`
const Ul = styled.ul`
  ${paragraph4};
  list-style: none;
  padding: 0;
  margin: 0 0 35px 0;
  li {
    line-height: 2;
  }
`
const LogoWrapper = styled.div`
  margin-bottom: 25px;
  min-width: 100%;
`
const Lists = styled.div`
  position: relative;
  padding: 30px 22px;
  color: ${colors.almostWhite};
  background: ${colors.darkPurple};
  display: flex;
  flex-wrap: wrap;
  > div:nth-of-type(1) {
    flex: 100%;
  }
  a {
    text-decoration: none;
    transition: color 300ms linear;
    color: ${colors.almostWhite};
    cursor: pointer;

    &:hover {
      color: ${(p) => p.theme.primary};

      ${Badge.Small} {
        background-color: ${({ theme }) => theme.primary};
        color: ${colors.fadedPurpleAlt};
      }
    }
  }

  ${media.mq[1]} {
    padding: 0;
  }
  ${media.mq[2]} {
    flex-wrap: no-wrap;
  }
`
