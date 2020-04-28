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
        </head>

        <body {...this.props.bodyAttributes}>
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
