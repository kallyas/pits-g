// @flow

import { css, useTheme } from '@emotion/react/macro'
import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as media from "../../style/media"
import * as colors from '../../style/colors'

import { IconArrowBigLeft } from '../icons/IconArrow'
import { defaultText, heading4 } from '../text'

const padding = ({ reducedDevicePadding }) =>
  reducedDevicePadding
    ? css`
        padding: 14px 25px;

        ${media.mq[2]} {
          padding: 14px 35px;
        }
      `
    : css`
        padding: 14px 35px;
      `

const Button = styled.button`
  ${defaultText};
  ${padding};
  align-items: center;
  border-radius: 26px;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 52px;
  transition: background-color 150ms linear, color 150ms linear;

  ${media.mq[1]} {
    height: 52px;
  }

  ${(p) => (p.fluid ? 'width: 100%;' : '')};

  &:hover {
    background-color: ${colors.fadedPurpleAlt};
    color: ${colors.white};
  }
`

export const Primary = styled(Button)`
  background-color: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.accent};
`

export const HeaderButtonWrapper = styled('div')`
  align-items: center;
  border-bottom: ${(p) =>
    p.ariaExpanded ? `1px solid ${colors.darkPurple}` : 'none'};
  color: ${colors.darkPurple};
  cursor: pointer;
  display: flex;
  line-height: 1.5;
  tabindex: 0;

  :focus {
    outline-style: none;
  }

  :focus-visible {
    outline-style: auto;
  }

  svg {
    margin-left: 8px;
  }
`

const caretKind = (caretDirection) => {
  switch (caretDirection) {
    case 'down':
      return `
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid;
      `
    case 'right':
      return `
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-left: 4px solid;
      `
    case 'up':
      return `
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        border-bottom: 4px solid;
      `
    default:
      throw new Error(`Unsupported caret direction ${caretDirection}`)
  }
}

const caret = ({ caretDirection }) =>
  caretDirection
    ? css`
        ::after {
          content: '';
          display: inline-block;
          height: 0;
          margin-left: 12px;
          margin-top: 2px;
          width: 0;
          ${caretKind(caretDirection)};
        }

        ::before {
          content: '';
        }
      `
    : ''

export const Secondary = styled(Button)`
  ${caret};
  background-color: transparent;
  border-color: ${(p) =>
    p.color || colors.darkPurple};
  color: ${(p) =>
    p.color || colors.darkPurple};
  padding: 0;
  height: auto;
  line-height: 1.5;

  ${media.mq[1]} {
    height: auto;
    color: ${(p) => p.color || colors.almostWhite};
  }

  &:hover {
    background-color: transparent;
    border-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.primary};
  }
`

export const SecondaryTrack = styled(Button)`
  background-color: ${colors.beige};
  color: ${(p) => p.theme.primary};
`

export const Alternate = styled(Button)`
  background-color: ${colors.darkPurple};
  color: ${colors.almostWhite};
`

const StyledCircleButton = styled(Button)`
  width: ${(p) =>
    p.large ? '96px' : '64px'};
  height: ${(p) =>
    p.large ? '96px' : '64px'};
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: ${(p) =>
      p.large ? '32px' : '22px'};
    transform: ${(p) =>
      p.side === 'right' ? 'rotate(180deg)' : ''};
  }
  background-color: ${colors.beige};

  &:hover {
    background-color: ${(p) =>
      p.theme.primary};
  }

  ${media.mq[1]} {
    width: ${(p) => (p.large ? '96px' : '64px')};
    height: ${(p) => (p.large ? '96px' : '64px')};
    &:hover {
      background-color: ${(p) => p.theme.primary};
    }
  }
`

export const Circle = ({
  side,
  onClick,
  large,
  arrowColor,
  ...props
}) => {
  const [hovered, setHovered] = React.useState(false)
  const theme = useTheme()
  return (
    <StyledCircleButton
      large={large}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      side={side || 'right'}
      {...props}
    >
      <IconArrowBigLeft
        color={
          hovered ? theme.accent : arrowColor ? arrowColor : colors.pink
        }
      />
    </StyledCircleButton>
  )
}

export const SocialLogin = styled.button`
  ${defaultText};
  background: white;
  border: none;
  color: ${(p) => p.color || colors.darkPurple};
  width: 286px;
  display: flex;
  align-items: center;
  height: 52px;
  cursor: pointer;
  border-radius: 50px;
  svg {
    width: 30px;
    margin-right: 5px;
  }
  &:hover {
    background: ${colors.almostWhite};
  }
`

export const Toggle = ({
  onClick,
  defaultActive,
  labels = [],
  promo,
}) => {
  const [active, setActive] = React.useState(defaultActive)
  const [hovered, setHovered] = React.useState(false)

  const onClickHandler = (pos) => {
    setActive(pos)
    setHovered(false)
    onClick(pos)
  }
  return (
    <React.Fragment>
      {promo && (
        <PromoPopup>
          <span>{promo}</span>
        </PromoPopup>
      )}
      <StyledToggleWrapper promo={promo}>
        <BgColor hovered={hovered} active={active} />
        <StyledToggleButton
          onMouseEnter={() => setHovered('left')}
          onMouseLeave={() => setHovered(false)}
          onClick={() => onClickHandler('left')}
          active={active === 'left'}
          accent={active === 'left' && hovered !== 'right'}
        >
          {labels[0]}
        </StyledToggleButton>
        <StyledToggleButton
          onMouseEnter={() => setHovered('right')}
          onMouseLeave={() => setHovered(false)}
          onClick={() => onClickHandler('right')}
          active={active === 'right'}
          accent={active === 'right' && hovered !== 'left'}
        >
          {labels[1]}
        </StyledToggleButton>
      </StyledToggleWrapper>
    </React.Fragment>
  )
}

const bgTransformMobile = ({ active }) => (active === 'left' ? 0 : 125)

const bgTransformDesktop = ({ active, hovered }) => {
  if (!hovered && active === 'left') return 0
  if (!hovered && active === 'right') return 160
  return hovered === 'left' ? 0 : 160
}

const BgColor = styled.div`
  position: absolute;
  background-color: ${(p) =>
    p.hovered ? colors.fadedPurpleAlt : p.theme.primary};
  border-radius: 26px;
  margin: 3px;
  height: 46px;
  transition: 0.4s;

  width: 140px;
  transform: translateX(${bgTransformMobile}px);
  ${media.mq[1]} {
    width: 167px;
    transform: translateX(${bgTransformDesktop}px);
  }
`

const StyledToggleButton = styled(Button)`
  width: 130px;
  padding: 11px 45px;

  &:last-child {
    padding: 11px 30px;
  }

  ${media.mq[1]} {
    width: unset;
    padding: 11px 52px !important;
  }
  margin: 3px;

  height: 46px !important;
  background-color: transparent !important;
  outline: none;

  z-index: 1;

  color: ${({ accent, theme }) => accent && theme.accent};
`

const StyledToggleWrapper = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.accent};
  width: fit-content;
  border-radius: 26px;
`

const PromoPopup = styled.div`
  ${heading4};
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  span {
    text-align: center;
    color: ${colors.darkPurple};

    background-color: ${({ theme }) => theme.accent};
    width: 80px;

    height: 25px;
    padding-top: 4px;
  }

  &:after,
  &:before {
    height: 8px;
    width: 8px;
    background-color: ${({ theme }) => theme.accent};
    transform: rotate(45deg);
    position: relative;
  }

  &:after {
    content: none;
    bottom: 4px;
  }

  &:before {
    content: ' ';
    top: 4px;
  }

  top: 85px;
  right: 120px;
  transform: rotate(15deg);

  ${media.mq[1]} {
    width: 120px;
    font-size: 1rem;

    right: 55px;
    top: 0;
    transform: rotate(-20deg);

    span {
      padding-top: 2px;
      width: 120px;
    }

    &:after {
      content: ' ';
    }

    &:before {
      content: none;
    }
  }
`

export const WithImage = ({
  className,
  image,
  onClick,
  title,
  subtitle,
  tabIndex,
  ...props
}) => {
  return (
    <WithImageWrapper
      tabIndex={tabIndex}
      className={className}
      onClick={onClick}
      {...props}
    >
      {image}
      <div>
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </WithImageWrapper>
  )
}

const WithImageWrapper = styled.button`
  ${defaultText};
  display: flex;
  align-items: center;
  text-align: left;
  border-radius: 50px;
  border: none;
  margin: 0;
  padding: 8px 12px;
  width: 260px;
  height: 64px;
  cursor: pointer;
  background: ${({ theme }) => theme.accent};
  color: ${colors.darkPurple};
  &:hover {
    background: ${colors.beige};
  }
  img {
    object-fit: contain;
    height: 48px;
    width: 48px;
  }

  img,
  .gatsby-image-wrapper {
    margin-right: 10px;
  }
`
