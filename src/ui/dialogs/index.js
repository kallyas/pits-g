// @flow

import styled from '@emotion/styled/macro'
import transparentize from 'polished/lib/color/transparentize'
import * as React from 'react'
import Modal from 'react-modal'

import * as colors from "../../style/colors"
import * as text from "../text"
import * as Button from "../button"


export const ConfirmDialog = ({
  width = 500,
  isOpen,
  title,
  body,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  const modalStyles = React.useMemo(
    () => ({
      overlay: {
        background: transparentize(0.3, colors.fadedPurple),
        zIndex: 100000,
      },
      content: {
        left: `calc(50% - ${width / 2}px)`,
        width: `${width}px`,
        height: 'fit-content',
        background: colors.beige,
      },
    }),
    [width]
  )

  return (
    <Modal style={modalStyles} isOpen={isOpen} onRequestClose={onCancel}>
      <Container>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <ButtonBar>
          <Button.Primary onClick={onConfirm}>{confirmText}</Button.Primary>
          {cancelText && (
            <Button.SecondaryTrack onClick={onCancel}>
              {cancelText}
            </Button.SecondaryTrack>
          )}
        </ButtonBar>
      </Container>
    </Modal>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled(text.H4)`
  color: ${(p) => p.theme.primary};
`

const Body = styled(text.P3)`
  color: ${(p) => p.theme.light.text};
  margin: 30px 0;
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  > * {
    width: 180px;
    justify-content: center;
  }
`
