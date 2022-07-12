// @flow

import * as React from 'react'

import * as colors from "../../style/colors"

export const IconEmail = ({
  color = colors.darkPurple,
}) => (
  <svg viewBox="0 0 512 512">
    <path
      fill={color}
      d="M0 76v360h512V76H0zm456.953 30L256 281.104 55.047 106h401.906zM30 123.967l151.624 132.12L30 388.058V123.967zM55.081 406l149.378-130.016L256 320.896l51.542-44.912L456.919 406H55.081zM482 388.059L330.376 256.087 482 123.967v264.092z"
    />
  </svg>
)
