// @flow

export const breakpoints = {
    small: 320,
    mobile: 800,
    desktop: 1200,
    wide: 1440,
    customWide: 1330, //timeHub custom breakpoint
  }
  
  const breakPointsValues = [
    breakpoints.small,
    breakpoints.mobile,
    breakpoints.desktop,
    breakpoints.wide,
    breakpoints.customWide, //timeHub custom breakpoint value
  ]
  
  export const mq = breakPointsValues.map(
    (bp) => `@media (min-width: ${bp}px)`
  )
  
  export const mqbp = breakPointsValues.map(
    (bp) => `(min-width: ${bp}px)`
  )
  
  export const mqbpi = breakPointsValues.map(
    (bp) => `(max-width: ${--bp}px)`
  )
  