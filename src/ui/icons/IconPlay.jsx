// @flow
import * as React from 'react'

export const IconPlay = ({
  color,
  arrowColor,
}) => (
  <svg viewBox="0 0 165 164">
    <path
      d="M82.5 163.299c45.563 0 82.5-36.555 82.5-81.65C165 36.557 128.063 0 82.5 0S0 36.556 0 81.65c0 45.094 36.937 81.649 82.5 81.649z"
      fill={color ?? '#FFDE91'}
    />
    <path
      d="M67.106 110.983l46.458-28.391L67.106 54.2v56.782z"
      fill={arrowColor ?? '#2C1338'}
    />
  </svg>
)
