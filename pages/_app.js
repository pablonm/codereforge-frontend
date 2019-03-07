import React from 'react'
import App, { Container } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faBell,
  faUserCog,
  faPowerOff,
  faCode,
  faMarker,
  faUser,
  faAward,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFile as faFileReg,
  faCommentAlt as faCommentAltReg,
} from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faBell,
  faUserCog,
  faPowerOff,
  faCode,
  faMarker,
  faUser,
  faFileReg,
  faCommentAltReg,
  faAward,
  faEnvelope,
  faGithub,
  faLinkedin
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
