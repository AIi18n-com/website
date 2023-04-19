import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const logo = (
  // left is /aii18n-logo.png
  // right is AI i18n
  <div
    style={{
      display: 'flex'
    }}
  >
    <img
      src="/aii18n-logo.png"
      alt="AI i18n"
      style={{
        width: 30,
        height: 30,
        marginRight: 10
      }}
    />
    <div
      style={{
        fontSize: 24,
        lineHeight: '30px'
      }}
    >
      AI i18n
    </div>
    <style jsx>{`
      div {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      div:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </div>
)

const config: DocsThemeConfig = {
  logo,
  head: (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AIi18n" />
      <meta
        property="og:description"
        content="AI Solution for Multilingual Website Localization"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  footer: {
    // © 2023 AIi18n.com | All rights reserved
    // Made with ❤️ by AIi18n
    // contact us
    text: <>© 2023 AIi18n.com | All rights reserved</>
  }
}

export default config
