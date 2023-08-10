/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions, plugins, getConfig }) => {
  const sassRuleModules = {
    test: /\.s(a|c)ss$/,
    use: [
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'src/styles/core/_variables.scss'
          ]
        }
      }
    ]
  }

  actions.setWebpackConfig({
    module: {
      rules: [sassRuleModules]
    },
    plugins: [
      plugins.define({
        'global.GENTLY': false
      })
    ]
  })
}
