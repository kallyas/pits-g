// @flow
import * as React from 'react'

import * as colors from "../../style/colors"

export const IconLinkedIn = ({
  color = colors.beige,
  height = 16,
}) => (
  <svg height={height} viewBox="0 0 47 47" fill={color}>
    <path d="M43.5 0h-40A3.4 3.4 0 0 0 0 3.4v40.2A3.4 3.4 0 0 0 3.5 47h40a3.4 3.4 0 0 0 3.5-3.4V3.4A3.4 3.4 0 0 0 43.5 0zM13.9 40.1H7V17.6h7zm-3.4-25.5a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm29.6 25.5h-7v-11c0-2.6 0-5.9-3.6-5.9S25.3 26 25.3 29v11.1h-7V17.6H25v3.1h.1a7.3 7.3 0 0 1 6.6-3.6c7.1 0 8.4 4.7 8.4 10.7V40z" />
  </svg>
)
