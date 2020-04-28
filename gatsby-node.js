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
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, './src/images'),
        '@components': path.resolve(__dirname, './src/components'),
        '@compositions': path.resolve(__dirname, './src/compositions'),
        '@context': path.resolve(__dirname, './src/context'),
        '@hoc': path.resolve(__dirname, './src/hoc'),
        '@modules': path.resolve(__dirname, './src/modules'),
        '@assets': path.resolve(__dirname, './assets'),
        '@styles': path.resolve(__dirname, './src/styles')
      }
    },
    plugins: [
      plugins.define({
        'global.GENTLY': false
      })
    ]
  })
}
