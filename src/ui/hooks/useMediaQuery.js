// @flow
import * as React from 'react'

export const useMediaQuery = (query, initialValue = false) => {
  const [doesMatch, onSetDoesMatch] = React.useState(initialValue)

  React.useEffect(() => {
    const onUpdateMatch = ({ matches }) => {
      onSetDoesMatch(matches)
    }

    const matcher = window.matchMedia(query)

    const isModern = 'addEventListener' in matcher
    if (isModern) {
      matcher.addEventListener('change', onUpdateMatch)
    } else {
      matcher.addListener(onUpdateMatch)
    }

    onUpdateMatch(matcher)

    return () => {
      if (isModern) {
        matcher.removeEventListener('change', onUpdateMatch)
      } else {
        matcher.removeListener(onUpdateMatch)
      }
    }
  }, [query, onSetDoesMatch])

  return doesMatch
}
