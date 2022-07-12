// @flow

import styled from "@emotion/styled/macro";
import * as React from "react";

import * as colors from "../../style/colors"

import { useHasMounted } from "../hooks/useHasMounted";
import { IconCaretDown } from "../icons/IconCaretDown";

import { LabelWrapper, inputCss, validatedCss } from "./styles";

export const Select = ({
  children,
  className,
  label,
  onChange,
  error,
  value,
  iconColor,
  ...props
}) => {
  // DEPECATED: We need to find places where the SSR content is not the same after the hydratation
  const isMounted = useHasMounted();

  if (!isMounted) return null;

  return (
    <LabelWrapper className={className} error={error} label={label}>
      <IconWrapper>
        <StyledSelect
          {...props}
          validated={value && error === null}
          onChange={(e) => onChange && onChange(e)}
          value={value}
        >
          {children}
        </StyledSelect>
        <IconCaretDown color={iconColor} />
      </IconWrapper>
    </LabelWrapper>
  );
};

const StyledSelect = styled.select`
  ${inputCss};
  &:focus {
    border-color: ${colors.almostWhite};
    color: ${colors.almostWhite};
  }
  ${(p) => (p.validated ? validatedCss : "")};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  outline: none;
  padding-right: 45px;
  option {
    color: ${colors.darkPurple};
  }
`;

const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  svg {
    position: absolute;
    right: 14px;
    top: 20px;
    pointer-events: none;
  }
`;
