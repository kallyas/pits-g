// @flow

import { MDXProvider as SourceMDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as React from 'react'

import * as text from "../ui/text"
import * as List from "../ui/list"

import { FTECalculator } from './addons/FTECalculator'
import { MDXCallToAction } from './addons/MDXCallToAction'
import { TimeCardCalculator } from './addons/TimeCardCalculator'
import { Timer } from './addons/Timer'
import { useAssets } from './hooks/useAssets'
import { Link } from './Link'

export const MDXProvider = ({
  children,
}) (
  <SourceMDXProvider
    components={{
      a: Link,
      h1: text.H1,
      h2: text.H2,
      h3: text.H3,
      h4: text.H4,
      h5: text.H5,
      img: Img,
      li: List.Item,
      strong: text.Strong,
      ul: List.Wrapper,
      FTECalculator,
      TimeCardCalculator,
      MDXCallToAction,
      Timer,
    }}
  >
    {children}
  </SourceMDXProvider>
)

export const MDX = ({
  p,
  italic,
  children,
}) => {
  if (typeof children !== 'object' || children?.body == null) {
    throw new Error(
      'Unexpectedly received something that is not compiled MDX. Check the schema or page data for changes.'
    )
  }

  return (
    <SourceMDXProvider
      components={{
        p: p ?? text.P1,
        italic: italic ?? text.P1,
      }}
    >
      <MDXRenderer>{children.body}</MDXRenderer>
    </SourceMDXProvider>
  )
}

const Img = ({
  children,
  src,
  ...rest
}) => {
  const { asset } = useAssets({ asset: src })

  return (
    <img {...rest} src={asset ?? src}>
      {children}
    </img>
  )
}
