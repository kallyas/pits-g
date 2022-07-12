// @flow
import { Link } from 'gatsby'
import * as React from 'react'

import * as Navigation from "../../ui/navigation/dropdown"
import * as NavigationH from "../../ui/navigation/menuContent"

const products = {
  title: 'Log in to Toggl',
  subtitle: 'Choose a product to log in',
  items: [
    {
      // image: require('components/layouts/assets/nav-toggl-track.svg').default,
      title: 'track',
      url: '/track/login',
      subtitle: 'Effortless time tracking',
    },
    {
      // image: require('components/layouts/assets/nav-toggl-plan.svg').default,
      title: 'plan',
      subtitle: 'Beautifully simple work planning',
      url: 'https://plan.toggl.com/#signin',
    },
    {
      // image: require('components/layouts/assets/nav-toggl-hire.svg').default,
      title: 'hire',
      subtitle: 'Intelligent candidate-screening',
      url: 'https://hire.toggl.com/admin',
    },
  ],
}

export function GlobalLogin() {
  return (
    <Navigation.DropdownItemContents item="global-login">
      <GlobalLoginContent />
    </Navigation.DropdownItemContents>
  )
}

export function GlobalLoginTrigger() {
  return (
    <Navigation.DropdownTrigger item="global-login">
      <span>Log in</span>
    </Navigation.DropdownTrigger>
  )
}

function GlobalLoginContent() {
  const hasTrackSession = false
  return (
    <NavigationH.MenuContent
      title={products.title}
      description={products.subtitle}
    >
      <Navigation.ProductsGroup>
        {products.items.map((item) => {
          return (
            <Link
              key={item.url}
              to={
                item.title === 'track' && hasTrackSession
                  ? process.env.GATSBY_TRACK_APP_URL
                  : item.url
              }
            >
              <Navigation.Product
                key={item.url}
                img={item.image}
                title={item.title}
                description={item.subtitle}
                mediaWidth="284"
                mediaHeight="178"
              />
            </Link>
          )
        })}
      </Navigation.ProductsGroup>
    </NavigationH.MenuContent>
  )
}
