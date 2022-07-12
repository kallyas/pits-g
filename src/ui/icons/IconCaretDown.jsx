// @flow

import { useTheme } from '@emotion/react/macro'
import * as React from 'react'

export const IconCaretDown = ({ color, ...props }) => {
  const theme = useTheme()
  return (
    <svg width={17} height={11} viewBox="0 0 17 11" {...props}>
      <path
        d="M14.657 3L9 8.657M3 3l5.657 5.657"
        stroke={color ?? theme.primary}
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  )
}
