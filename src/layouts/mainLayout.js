import React from "react"
import * as PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"

import theme from "../theme"
import Header from "../components/header"
import Footer from "../components/footer"
import { connect } from "react-redux"

const MainLayout = ({ auth, children, profile }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const { title } = data.site.siteMetadata

      return (
        <ThemeProvider theme={theme}>
          <Flex flexDirection="column">
            <Header auth={auth} profile={profile} siteTitle={title} />
            <main>{children}</main>
            <Footer siteTitle={title} />
          </Flex>
        </ThemeProvider>
      )
    }}
  />
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
})

export default connect(mapStateToProps)(MainLayout)
