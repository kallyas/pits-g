// @flow

import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"
import * as variables from "../../style/variables"

import * as Button from '../button'
import * as Responsive from '../responsive'
import * as text from '../text'

import { TriggerButton, useDropdown } from './dropdown'


export const Header = ({
  alt = false,
  background,
  cta,
  children,
  logo,
  logoWidth,
  secondaryLinks,
}) => {
  const { isOpen } = useDropdown()

  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const toggleMobileMenu = React.useCallback(() => {
    setShowMobileMenu((visible) => !visible)
  }, [])

  const [hasScrolled, setHasScrolled] = React.useState(false)
  React.useEffect(() => {
    const listenScrollEvent = () => {
      setHasScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', listenScrollEvent)
    // we have a race condition here, it is possible that scroll event is emitted before our event listener is hooked.
    // so calling the listenScrollEvent again to check for initial scroll
    listenScrollEvent()
  }, [])

  return (
    <Nav open={isOpen}>
      <HeaderBar
        background={background}
        open={isOpen}
        hasScrolled={hasScrolled}
      >
        <LogoWrapper logoWidth={logoWidth}>{logo}</LogoWrapper>
        <DesktopLinks open={isOpen}>
          {children}
          <HeaderCTA noMargin={alt}>
            {secondaryLinks}
            {cta}
          </HeaderCTA>
        </DesktopLinks>
        <Responsive.MobileOnly>
          <MobileLinksWrapper open={showMobileMenu}>
            <ul>{children}</ul>
            <CtaWrapper>
              <CtaButtonWrapper>{cta}</CtaButtonWrapper>
              <div>{secondaryLinks}</div>
            </CtaWrapper>
          </MobileLinksWrapper>
          <Burger open={showMobileMenu} onClick={toggleMobileMenu}>
            <div />
            <div />
            <div />
          </Burger>
        </Responsive.MobileOnly>
      </HeaderBar>
    </Nav>
  )
}

const Nav  = styled.nav`
  display: flex;
  flex-wrap: wrap;
  height: ${variables.headerHeight}px;
  position: relative;
  width: 100%;

  ${media.mq[0]} {
    pointer-events: all;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }

  ${media.mq[1]} {
    display: block;
    height: ${variables.headerHeightTablet}px;
    pointer-events: all;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    &::after {
      display: block;
      content: '';
      width: 100%;
      position: absolute;
      background-color: ${(p) => p.theme.backgroundDesktop};
      height: ${({ open }) => (open ? '100%' : '0%')};
      z-index: -1;
      padding: 0;
      top: 0;
    }
  }

  ${media.mq[2]} {
    height: ${variables.headerHeightFull}px;
  }
`

const LogoWrapper = styled.div`
  width: ${(p) => p.logoWidth[0]};
  display: flex;
  flex-shrink: 0;
  margin-right: 30px;

  ${media.mq[2]} {
    width: ${(p) => p.logoWidth[1]};
  }

  a {
    display: flex;
    flex: 1;
    ${media.mq[1]} {
      height: 52px;
    }
  }

  svg {
    width: 100%;
    ${media.mq[1]} {
      margin-top: 15px;
    }
    ${media.mq[2]} {
      margin-top: 0;
    }
  }
`

const setBottomBorder = (p) => {
  if (!p.hasScrolled && !p.open) return 'none'
  return `1px solid ${p.open ? colors.almond : colors.purple60}`
}

const HeaderBar = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  background-color: ${(p) => p.background || p.theme.background};
  border-bottom: solid 1px ${(p) => p.theme.borderColor};
  justify-content: space-between;
  padding: 0 30px;
  height: 64px;
  transition: ${(p) => (p.open ? 'none' : 'background 0.15s ease-in')};

  ${media.mq[1]} {
    flex-wrap: wrap;
    height: ${variables.headerHeightTablet}px;
    background-color: ${({ open, background = 'transparent', hasScrolled }) => {
      if (hasScrolled) return open ? colors.beige : colors.darkPurple
      return open ? 'transparent' : background
    }};
    border-bottom: ${setBottomBorder};

    ${Button.Secondary}, ${Button.HeaderButtonWrapper}, a, ${TriggerButton} {
      color: ${(p) => (p.open ? colors.darkPurple : colors.almostWhite)};
    }

    ${LogoWrapper} svg {
      transition-property: fill;
    }
  }
  ${media.mq[2]} {
    flex-wrap: no-wrap;
    height: ${variables.headerHeightFull}px;
  }
`

const DesktopLinks = styled.ul`
  ${text.paragraph3};
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
  width: 100%;
  a {
    text-decoration: none;
  }
  > li > a:hover {
    color: ${(p) => (p.open ? colors.purple60 : p.theme.primary)};
  }
  ${media.mq[1]} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 100%;
    column-gap: 25px;
  }
  ${media.mq[2]} {
    flex: 1;
    column-gap: 35px;
  }
`

const HeaderCTA = styled.div`
  margin-left: ${(p) => (p.noMargin ? '0' : 'auto')};
  ${media.mq[1]} {
    display: flex;
    column-gap: 20px;
    align-items: center;
    transform: translateY(-50%);
  }
  ${media.mq[2]} {
    transform: translateY(0);
  }
`

const MobileLinksWrapper = styled.div`
  background: ${(p) => p.theme.background};
  flex-direction: column;
  padding: 30px 20px;
  position: absolute;
  top: 100%;
  left: 0;
  height: calc(100vh - 100%);
  transition: all 300ms linear;
  width: 100%;
  overflow: hidden;

  display: ${(p) => (p.open ? 'flex' : 'none')};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    a,
    button,
    button:hover {
      padding: 0;
      text-decoration: none;
      color: ${colors.fadedPurple};
    }
    > li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
  }
  ${media.mq[1]} {
    display: none;
  }
`

const CtaButtonWrapper = styled.div`
  margin-bottom: 20px;

  ${media.mq[1]} {
    margin: 0;
  }
`

const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  ${media.mq[1]} {
    display: none;
  }

  div {
    width: 24px;
    height: 2px;
    background: ${colors.darkPurple};
    border-radius: 10px;
    position: relative;
    transform-origin: 3px;

    :first-of-type {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  ${media.mq[1]} {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    margin-left: auto;
  }
`
