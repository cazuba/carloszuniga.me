import React from 'react'
import { array, string, object } from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:400i,600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:700i,800&display=swap" rel="stylesheet" />
          {this.props.headComponents}
          {/* <script dangerouslySetInnerHTML={{
            __html: `
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W5RFV2VW');</script>
            <!-- End Google Tag Manager -->
          `
          }}/> */}
        </head>

        <body {...this.props.bodyAttributes}>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: `
                <!-- Google Tag Manager (noscript) -->
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W5RFV2VW"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <!-- End Google Tag Manager (noscript) -->`
            }}
          /> */}
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  body: string,
  bodyAttributes: object,
  headComponents: array,
  htmlAttributes: object,
  postBodyComponents: array,
  preBodyComponents: array
}

HTML.defaultProps = {
  body: '',
  bodyAttributes: {},
  headComponents: [],
  htmlAttributes: {},
  postBodyComponents: [],
  preBodyComponents: []
}
