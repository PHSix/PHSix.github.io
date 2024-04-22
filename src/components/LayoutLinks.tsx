'use client'
import { useSignal } from '@preact/signals-react'
import { Fragment } from 'react'
import NextLink from 'next/link'
import PopupLinks from './PopupLinks'
import DarkModeSwitcher from './DarkModeSwitcher'

export default function LayoutLinks(props: {
  links: {
    url: string
    blank?: boolean
    text: string
  }[]
}) {
  const showMenu = useSignal(false)
  return (
    <Fragment>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => {
          showMenu.value = true
        }}
      >
        🔗
      </div>
      <PopupLinks
        visible={showMenu}
        links={props.links}
        onClose={() => {
          showMenu.value = false
        }}
      />
      <div className="gap-4 hidden md:flex">
        {
          props.links.map(l => <NextLink href={l.url} target={l.blank ? '_blank' : void 0} key={l.text} className="hover:text-stone-300">{l.text}</NextLink>)
        }
      </div>
      <DarkModeSwitcher />
    </Fragment>
  )
}
