// @flow

import { useTheme } from '@emotion/react/macro'
import * as React from 'react'

export const IconCheck = ({ color }) => {
  const theme = useTheme()

  return (
    <svg width={17} height={14} viewBox="0 0 17 14">
      <path
        d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z"
        stroke={color ?? theme.primary}
        fill={color ?? theme.primary}
      />
    </svg>
  )
}
