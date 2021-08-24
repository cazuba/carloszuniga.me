import React from 'react'

// components
import Layout from '@components/Layout'
import SEO from '@components/Seo'
import AguinaldoCountDown from '@compositions/AguinaldoCountDown'
import { any } from 'prop-types'

const ParaCuandoAguinaldoPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Para cuando el aguinaldo" />
    <AguinaldoCountDown />
  </Layout>
)

ParaCuandoAguinaldoPage.propTypes = {
  location: any
}
ParaCuandoAguinaldoPage.defaultProps = {
  location: {}
}

export default ParaCuandoAguinaldoPage
