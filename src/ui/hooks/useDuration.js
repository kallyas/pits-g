// @flow
import * as React from 'react'

import { useInterval } from './useInterval'

const ONE_SECOND = 1000

export function useDuration(since) {
  const [duration, setDuration] = React.useState(0)
  const updateDuration = React.useCallback(() => {
    if (!since) return
    setDuration(Math.trunc((Date.now() - since) / ONE_SECOND))
  }, [since])
  useInterval(updateDuration, since ? ONE_SECOND : null)
  return duration
}
