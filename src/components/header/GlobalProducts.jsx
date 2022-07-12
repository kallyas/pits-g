// @flow
import { Link } from 'gatsby'
import * as React from 'react'

import * as Navigation from "../../ui/navigation/dropdown"
import * as ProductNavigation from "../../ui/navigation/product"
import MenuContent from "../../ui/navigation/menuContent"

const products = {
  title: 'Meet Toggl. Three products; One mission.',
  subtitle:
    'Our tools help teams work better. No matter how or where they work.',
  items: [
    {
    //   image: require('components/layouts/assets/nav-toggl-track.svg').default,
      title: 'track',
      subtitle: 'Effortless time tracking',
      url: '/track/',
    },
    {
    //   image: require('components/layouts/assets/nav-toggl-plan.svg').default,
      title: 'plan',
      subtitle: 'Beautifully simple work planning',
      url: 'https://toggl.com/plan/',
    },
    {
    //   image: require('components/layouts/assets/nav-toggl-hire.svg').default,
      title: 'hire',
      subtitle: 'Intelligent candidate-screening',
      url: 'https://toggl.com/hire/',
    },
  ],
}

export function GlobalProducts() {
  return (
    <Navigation.DropdownItemContents item="global-products">
      <GlobalProductsContent />
    </Navigation.DropdownItemContents>
  )
}

export function GlobalProductsDropdown() {
  return (
    <Navigation.DropdownItem item="global-products">
      <span>Products</span>
      <GlobalProductsContent />
    </Navigation.DropdownItem>
  )
}

function GlobalProductsContent() {
  return (
    <MenuContent
      title={products.title}
      description={products.subtitle}
    >
      <ProductNavigation.ProductsGroup>
        {products.items.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <ProductNavigation.Product
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
      </ProductNavigation.ProductsGroup>
    </MenuContent>
  )
}
