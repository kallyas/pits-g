// @flow

import { Global, css } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import * as React from "react";
import { Helmet } from "react-helmet";

import * as colors from "../../style/colors";

export const LayoutRoot = ({
  title,
  description,
  children,
  noSmoothScrolling = false,
}) => {
  return (
    <StyledLayoutRoot>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title itemProp="name">{title}</title>
        <meta property="og:title" content={title} />
        <meta
          name="description"
          property="og:description"
          content={
            description ||
            "When time tracking is this easy, you can get more done. Toggl Track data brings clarity around profitability and helps you make better business decisions."
          }
        />

        <link
          rel="preload"
          href={require("../../fonts/gt-haptik-medium-500.latin.woff2").default}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={
            require("../../fonts/gt-haptik-medium-rotalic-500.latin.woff2")
              .default
          }
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={require("../../fonts/inter-400.latin.woff2").default}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={require("../../fonts/inter-500.latin.woff2").default}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>

      {noSmoothScrolling && (
        <Global
          styles={css`
            html {
              scroll-behavior: auto;
              overflow-x: hidden;
            }
          `}
        />
      )}
      {children}
    </StyledLayoutRoot>
  );
};

const StyledLayoutRoot = styled.div(`
  background-color: ${colors.darkPurple};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`);
