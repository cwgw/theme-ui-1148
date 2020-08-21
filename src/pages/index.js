import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Box } from "theme-ui"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const CustomComponent = styled("p")(props => {
  console.log("CustomComponent props:", { props })
  return {}
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box variant="blueBox">
      <CustomComponent>
        I am a custom component. My parent component, theme-ui's{" "}
        <code>Box</code>, should have a blue background as declared in{" "}
        <code>theme.blueBox</code> and set by it's variant prop. But, it seems
        both of us are receiving an empty theme object. Check the console where
        I log the props I received.
      </CustomComponent>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Box>
  </Layout>
)

export default IndexPage
