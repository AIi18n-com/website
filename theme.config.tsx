import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AI i18n</span>,
  project: {
    link: 'https://github.com/AIi18n-com'
  },
  docsRepositoryBase: 'https://github.com/AIi18n-com',
  footer: {
    // © 2023 AIi18n.com | All rights reserved
    // Made with ❤️ by AIi18n
    // contact us
    text: (
      <>
        © 2023 AIi18n.com | All rights reserved
        <br />
        <div>
          <a
            href="https://aii18n.com/privacy-policy"
            style={{ marginLeft: 20 }}
          >
            Privacy Policy
          </a>
        </div>
        <div>
          <a href="mailto: support@aii18n.com" style={{ marginLeft: 20 }}>
            support@aii18n.com
          </a>
        </div>
        <div>
          <a href="https://twitter.com/AIi18n" style={{ marginLeft: 20 }}>
            Twitter
          </a>
        </div>
      </>
    )
  }
}

export default config
