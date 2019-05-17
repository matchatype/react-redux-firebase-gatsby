import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/mainLayout"
import Image from "../components/image"
import SEO from "../components/seo"
import CSSReset from "../theme/reset"
import { Flex } from "rebass"
import GlobalStyle from "../theme/global"

const IndexPage = () => (
  <Layout>
    <CSSReset />
    <GlobalStyle />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Flex px={4} py={4} width={[1, 1, 960]} mx="auto" flexDirection="column">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Flex>
  </Layout>
)

export default IndexPage
