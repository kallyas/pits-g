// @flow

import styled from '@emotion/styled/macro'
import { Link } from 'gatsby'
import * as React from 'react'

import * as colors from "../../style/colors"
import * as media from "../../style/media"

import { Logo } from '../logos'
import * as text from '../text'


export const ThreeCol = ({ title, jobs }) => {
  const count = jobs.length
  const summaryText = `${count} position${count === 1 ? '' : 's'}`

  return (
    <Root>
      <HeaderWrapper>
        <Summary>{summaryText}</Summary>
        <text.H3 color={colors.yellow}>{title}</text.H3>
      </HeaderWrapper>

      {jobs.map((vacancy, id) => (
        <VacancyWrapper to={`/jobs/${vacancy.slug}/`} key={id}>
          <VacancyTitleWrapper> {vacancy.title}</VacancyTitleWrapper>

          <VacancyDescription>{vacancy.description}</VacancyDescription>

          <TeamStyled>
            <Logo kind={vacancy.team} />
          </TeamStyled>
        </VacancyWrapper>
      ))}
    </Root>
  )
}

const TeamStyled = styled.div`
  svg {
    height: 28px;
  }
  ${media.mq[2]} {
    flex: 0 0 160px;
    text-align: right;
  }
`

const VacancyDescription = styled(text.P3)`
  display: none;
  ${media.mq[1]} {
    display: block;
    flex: 2.5;
    padding-right: 30px;
  }
`

const VacancyTitleWrapper = styled(text.P1)`
  ${media.mq[2]} {
    flex: 1;
    padding-right: 30px;
  }
`

const VacancyWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px;
  margin: 10px 0;
  background: ${colors.darkPurple};
  color: ${colors.beige};
  ${media.mq[1]} {
    margin: 15px 0;
    &:hover {
      background-color: ${colors.fadedPurpleAlt};
    }
  }
  ${media.mq[2]} {
    flex-direction: row;
    justify-content: space-between;
    padding: 45px;
  }
`

const HeaderWrapper = styled.div`
  margin: 0 0 25px;
`

const Summary = styled(text.P1)`
  color: ${colors.beige};
  margin-bottom: 6px;
  ${media.mq[1]} {
    margin-bottom: 0;
  }
`

const Root = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 20px;
  ${media.mq[1]} {
    margin-bottom: 40px;
  }
`
