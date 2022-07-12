// @flow

import styled from '@emotion/styled/macro'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import { IconArrowDown, IconArrowUp } from '../icons/IconArrow'
import * as text from '../text'

export const Accordion = ({
  title,
  sections,
  active,
  allowMultipleOpen = false,
}) => {
  const initialState = active ? { [active]: true } : {}
  const [openSections, setOpen] = React.useState(initialState)

  const onClick = (id) => {
    const nextState = !openSections[id]
    if (allowMultipleOpen) {
      setOpen({ ...openSections, [id]: nextState })
    } else {
      setOpen({ [id]: nextState })
    }
  }

  return (
    <Root>
      <Title>{title}</Title>
      {sections.map((section, idx) => {
        const isOpen = !!openSections[idx]

        return (
          <Section key={`section_${idx}`} isOpen={isOpen}>
            <SectionHeader isOpen={isOpen} onClick={() => onClick(idx)}>
              <SectionTitle isOpen={isOpen}>{section.title}</SectionTitle>
              <div>
                {!isOpen && <IconArrowDown />}
                {isOpen && <IconArrowUp />}
              </div>
            </SectionHeader>
            {isOpen && <Description>{section.description}</Description>}
          </Section>
        )
      })}
    </Root>
  )
}

const Description = styled.div`
  ${text.paragraph3};
  color: ${colors.fadedPurple};
  margin-top: 18px;
  p {
    color: ${colors.fadedPurple};
    margin-bottom: 15px;
  }
  a {
    color: ${colors.fadedPurple};
    text-decoration: underline;
  }
  ${media.mq[1]} {
    margin-top: 18px;
  }
`

const Section = styled.div`
  padding: 20px;
  border: 1px solid ${colors.darkPurple};
  border-width: 1px 0 0;

  &:last-of-type {
    border-bottom: 1px solid ${colors.darkPurple};
  }
  background-color: ${({ isOpen, theme }) => (isOpen ? theme.primary : 'none')};

  ${media.mq[1]} {
    padding: ${({ isOpen }) => (isOpen ? '30px 35px 20px' : '20px 35px 25px')};

    background-color: ${({ isOpen, theme }) =>
      isOpen ? theme.primary : 'none'};
  }
  ${media.mq[2]} {
    padding: 30px;
  }
`

const SectionTitle = styled(text.H4)`
  display: inline-block;
  width: 100%;
  margin-right: 20px;
  color: ${({ isOpen }) => (isOpen ? colors.fadedPurple : colors.beige)};
`

const SectionHeader = styled.div`
  color: ${({ isOpen }) => (isOpen ? colors.darkPurple : colors.beige)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`

const Title = styled(text.H2)`
  color: ${({ isOpen, theme }) => (isOpen ? colors.darkPurple : theme.primary)};
  text-align: center;
  margin-bottom: 27px;
  ${media.mq[1]} {
    margin-bottom: 52px;
  }
`

const Root = styled.div`
  margin: 30px auto 60px;
  max-width: 1100px;
`
