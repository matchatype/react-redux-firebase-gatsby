import * as PropTypes from "prop-types"
import React from "react"
import { Flex } from "rebass"

const Footer = ({ siteTitle }) => (
  <footer>
    <Flex px={4} py={4} width={[1, 1, 960]} mx="auto" alignItems="center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="//littlerobotfriends.com">{siteTitle}</a>
    </Flex>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
