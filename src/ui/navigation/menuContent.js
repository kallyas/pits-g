// @flow

import styled from "@emotion/styled/macro";
import * as React from "react";

import * as colors from "../../style/colors";

import * as text from "../text";

export default function MenuContent({ title, description, children }) {
  return (
    <div>
      <Title color={colors.darkPurple}>{title}</Title>
      <text.P3 color={colors.darkPurple}>{description}</text.P3>
      <Content>{children}</Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Title = styled(text.H4)`
  margin: 5px 0;
`;
