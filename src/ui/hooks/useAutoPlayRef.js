// @flow
import * as React from 'react'

import * as style from "../../style/media"

import { useMediaQuery } from './useMediaQuery'

// Use this to autoplay video elements. Prevents mobile users from needlessly
// downloading videos that are not visible on their media.
//
// Are you showing a video? Is that video hidden on mobile and an image being
// shown instead? Use this!
export const useAutoPlayRef = () => {
  const isTablet = useMediaQuery(style.mqbp[1])
  const [node, setNode] = React.useState(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  React.useEffect(() => {
    if (!isTablet || !node || isPlaying) {
      return
    }

    setIsPlaying(node.play()?.catch?.(() => {}))
  }, [isTablet, node, isPlaying, setIsPlaying])

  return React.useCallback((node) => {
    if (!node) {
      return
    }

    setNode(node)
  }, [])
}
