import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
          enhanceComponent: Component => Component,
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/static/img/favicon.ico" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i"
            rel="stylesheet"
          />
          <meta name="viewport" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
  "@context": "http://www.schema.org",
  "@type": "WebSite",
  "name": "CodeReforge",
  "alternateName": "Code Reforge",
  "url": "https://codereforge.com"
}`,
            }}
          />
        </Head>
        <body style={{ backgroundColor: 'black', color: 'white' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
