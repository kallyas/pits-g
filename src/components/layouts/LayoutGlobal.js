// @flow

import { ThemeProvider, css } from "@emotion/react/macro";
import styled from '@emotion/styled/macro'
import { Link, graphql, useStaticQuery, withPrefix } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

import * as colors from "../../style/colors";
import * as media from "../../style/media";
import * as themes from "../../style/themes";
import * as Button from "../../ui/button";
import * as Footer from "../../ui/footer";
import { Header } from "../../ui/Header";

import { GlobalHeaderContents } from "../header/GloabalHeaderContents";
import { GlobalLoginTrigger } from "../header/GlobalLogin";
import { LayoutRoot } from "./LayoutRoot";
import * as Navigation from "../../ui/navigation/dropdown"
import * as NavigationH from "../../ui/navigation/header"
import { useCloseOnBlurEffect } from "../../ui/hooks/useCloseOnBlurEffect";

export const LayoutGlobal = ({
  children,
  announcement,
  background,
  ...rest
}) => {
  let openPositions = []
  return (
    <LayoutRoot {...rest}>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          // href={require("assets/favicon-global.png").default}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          // href={require("assets/favicon-global-48.png").default}
          sizes="48x48"
        />
      </Helmet>
      <ThemeProvider theme={themes.global}>
        <Navigation.DropdownProvider>
          <GlobalHeader announcement={announcement} background={background} />
        </Navigation.DropdownProvider>
        {children}
        <Footer.Wrapper
          Link={Link}
          openPositions={openPositions}
          logo={<IconGlobal />}
          products={[
            <TrackLink to={"/track/"} key="track">
              {/* <Track /> */}
              <span>Effortless time tracking</span>
            </TrackLink>,
            <PlanLink href={withPrefix("/plan/")} key="plan">
              {/* <Plan /> */}
              <span>Beautifully simple work planning</span>
            </PlanLink>,
            <HireLink href={withPrefix("/hire/")} key="hire">
              {/* <Hire /> */}
              <span>Intelligent candidate-screening</span>
            </HireLink>,
          ]}
        />
      </ThemeProvider>
    </LayoutRoot>
  );
};


const GlobalHeader = ({ announcement, openPositions, background }) => {
  const headerRef = React.useRef(null);
  const { isOpen, close: closeHeader } = Navigation.useDropdown();
  useCloseOnBlurEffect(headerRef, closeHeader);

  return (
    <Header ref={headerRef}>
      {announcement ? announcement : null}

      <NavigationH.Header
        background={background}
        logoWidth={["75px", "85px"]}
        logo={
          <Link to="/">
            {/* <StyledLogo open={isOpen} /> */}
          </Link>
        }
        secondaryLinks={<GlobalLoginTrigger />}
        cta={
          <Navigation.DropdownBaseTrigger item="global-products">
            <Button.Primary reducedDevicePadding>Try Toggl</Button.Primary>
          </Navigation.DropdownBaseTrigger>
        }
      >
        <GlobalHeaderContents openPositions={openPositions} />
      </NavigationH.Header>
    </Header>
  );
};

// const StyledLogo = styled(Global)`
//   fill: ${colors.darkPurple};

//   ${media.mq[1]} {
//     fill: ${({ open }) => (open ? colors.darkPurple : colors.yellow)};
//   }
// `;

const IconGlobal = () => (
  <div
    css={css`
      width: 85px;
      svg {
        width: 100%;
      }
    `}
  >
    {/* <Global /> */}
  </div>
);

const TrackLink = styled(Link)`
  &:hover {
    color: ${colors.pink};
  }
`;
const PlanLink = styled.a`
  &:hover {
    color: ${colors.violet};
  }
`;
const HireLink = styled.a`
  &:hover span {
    color: ${colors.orange};
  }
`;
