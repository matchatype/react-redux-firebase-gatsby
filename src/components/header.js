import * as PropTypes from "prop-types"
import React, { useState } from "react"
import { Box, Button, Flex, Heading } from "rebass"
import { withFirebase } from "react-redux-firebase"

import { SIGN_IN_ERROR } from "../store/actions/actionTypes"

const Header = props => {
  const { auth, dispatch, firebase, profile, siteTitle } = props

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const handleValueChange = event => {
    const { name, value } = event.target
    setCredentials(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await firebase.login(credentials)
    } catch (error) {
      dispatch({
        type: SIGN_IN_ERROR,
        payload: { ...error },
      })
    }
  }

  return (
    <header>
      <Flex px={4} py={4} width={[1, 1, 960]} mx="auto" alignItems="center">
        <Heading fontSize={[4, 5]} color="primary">
          {siteTitle}
        </Heading>
        <Box mx="auto" />
        <Button bg="primary">Button</Button>
        <Button ml={2} bg="primary">
          Button
        </Button>
      </Flex>
      <Flex px={4} py={4} width={[1, 1, 960]} mx="auto" alignItems="center">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleValueChange}
            value={credentials.email}
          />
          <input
            type="password"
            name="password"
            onChange={handleValueChange}
            value={credentials.password}
          />
          <button type="submit">Login</button>
        </form>
      </Flex>
    </header>
  )
}

Header.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withFirebase(Header)
