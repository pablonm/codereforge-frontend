import React from 'react'
import App, { Container } from 'next/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBell,
  faStar,
  faUserCog,
  faPowerOff,
  faCode,
  faMarker,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFile as faFileReg,
  faCommentAlt as faCommentAltReg,
} from '@fortawesome/free-regular-svg-icons'

library.add(
  faBell,
  faStar,
  faUserCog,
  faPowerOff,
  faCode,
  faMarker,
  faUser,
  faFileReg,
  faCommentAltReg
)

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
