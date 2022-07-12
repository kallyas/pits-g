// @flow
import styled from '@emotion/styled/macro'
import * as React from "react";
import * as colors from "../../style/colors"
import * as fonts from "../../style/fonts"
import * as media from "../../style/media"
import * as variables from "../../style/variables"

import { IconArrowBigLeft } from "../icons/IconArrow";
import { IconDown } from "../icons/IconArrow";
import { IconRight } from "../icons/IconArrow";
import { IconUp } from "../icons/IconArrow";
import * as Responsive from "../responsive"

import * as text from "../text";

const DropdownContext = React.createContext(null);

export function DropdownProvider({ children }) {
  const [selected, setSelected] = React.useState(null);
  const value = React.useMemo(
    () => ({
      isOpen: !!selected,
      selected,
      selectItem: setSelected,
      close: () => setSelected(null),
    }),
    [selected]
  );
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const value = React.useContext(DropdownContext);
  if (!value) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return value;
}

export function DropdownBaseTrigger(props) {
  const { selectItem } = useDropdown();
  return React.useMemo(
    () =>
      React.cloneElement(props.children, {
        onClick: () =>
          selectItem((selected) =>
            selected === props.item ? null : props.item
          ),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );
}

export function DropdownTrigger(props) {
  const { selected, isOpen } = useDropdown();
  return (
    <DropdownBaseTrigger item={props.item}>
      <TriggerButton
        open={isOpen}
        ariaExpanded={selected === props.item}
        role="button"
        tabIndex={0}
      >
        {props.children}
        <DropdownTriggerCaret item={props.item} />
      </TriggerButton>
    </DropdownBaseTrigger>
  );
}

export function DropdownTriggerCaret(props) {
  const { selected, isOpen } = useDropdown();
  return (
    <React.Fragment>
      <Responsive.DesktopOnly>
        {selected === props.item ? <IconUp /> : <IconDown dark={isOpen} />}
      </Responsive.DesktopOnly>
      <Responsive.MobileOnly>
        <IconRight />
      </Responsive.MobileOnly>
    </React.Fragment>
  );
}

export function DropdownItem(props) {
  return (
    <li>
      <DropdownTrigger item={props.item}>{props.children[0]}</DropdownTrigger>
      <DropdownItemContents item={props.item}>
        {props.children[1]}
      </DropdownItemContents>
    </li>
  );
}

export function DropdownItemContents(props) {
  const { selected, close } = useDropdown();
  return selected === props.item ? (
    <DropdownContents>
      <Responsive.MobileOnly>
        <BackContainer>
          <GoBack tabIndex={0} role="button" onClick={close}>
            <IconArrowBigLeft color={colors.darkPurple} />
            <span>Back</span>
          </GoBack>
        </BackContainer>
      </Responsive.MobileOnly>
      <ContentsWrapper>{props.children}</ContentsWrapper>
    </DropdownContents>
  ) : null;
}

export function DropdownColumn({ children, title, className }) {
  return (
    <Column className={className}>
      <ColumnTitle color={colors.purple60}>{title}</ColumnTitle>
      {children}
    </Column>
  );
}

export const DropdownSideColumn = styled(DropdownColumn)`
  margin-top: 20px;
  ${media.mq[2]} {
    margin-top: 0;
    padding-left: 30px;
    flex: 0 0 35%;
    max-width: 500px;
    border-left: 2px solid ${colors.almond};
    > a {
      flex: 1 1 100%;
    }
  }
`;

const DropdownContents = styled.div`
  --top--offset: 0px;
  position: absolute;
  top: var(--top--offset);
  left: 0px;
  height: 100%;
  width: 100%;
  padding: 30px;
  background-color: ${colors.beige};
  max-height: calc(100vh - var(--top--offset));
  overflow: auto;
  ${media.mq[1]} {
    height: auto;
    --top--offset: ${variables.headerHeightTablet}px;
  }

  ${media.mq[2]} {
    --top--offset: ${variables.headerHeightFull}px;
    padding: 25px 35px 35px;
  }
`;

const ContentsWrapper = styled.div`
  ${media.mq[2]} {
    display: flex;
  }
`;

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 15px;
  padding: 5px 0 0;
  > a {
    flex: 1 1 100%;
  }
  ${media.mq[1]} {
    column-gap: 40px;
    row-gap: 20px;
    > a {
      flex: 1 1 45%;
    }
  }
  ${media.mq[2]} {
    flex: 1;
    padding-right: 40px;
    > a {
      max-width: 350px;
    }
  }
`;

const ColumnTitle = styled(text.UppercaseOneLiner)`
  width: 100%;
`;

export const TriggerButton = styled.button`
  display: flex;
  align-items: center;
  line-height: 1.5;
  background: none;
  border: none;
  border-bottom: ${(p) =>
    p.ariaExpanded ? `1px solid ${colors.darkPurple}` : "none"};
  color: ${colors.darkPurple};
  cursor: pointer;
  padding: 0;
  :hover {
    color: ${(p) => (p.open ? colors.purple60 : p.theme.primary)};
  }
  :focus {
    outline-style: none;
  }

  :focus-visible {
    outline-style: auto;
  }
`;

const BackContainer = styled.div`
  margin-bottom: 30px;
`;

const GoBack = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > span {
    margin-left: 20px;
    ${text.paragraph3};
    font-family: ${fonts.inter};
    color: ${colors.darkPurple};
  }

  svg {
    width: 30px;
  }

  ${media.mq[1]} {
    display: none;
  }
`;
