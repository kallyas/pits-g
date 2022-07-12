// @flow
import * as React from 'react'

export function useTimeout(callback, delay) {
  const savedCallback = React.useRef()

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  React.useEffect(() => {
    function handler() {
      savedCallback.current?.()
    }
    if (delay !== null) {
      const id = setTimeout(handler, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}
