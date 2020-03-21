import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Bookmark from "../components/bookmark"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" />
    <h1>Hello!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

    <SEO title="Home" />

    <h1>ENGR 301</h1>

    <Bookmark title="Google" link="https://www.google.com"/>
    <Bookmark title="Google" link="https://www.google.com"/>
    <Bookmark title="Google" link="https://www.google.com"/>
    <Bookmark title="Google" link="https://www.google.com"/>


    <Link to="/page-2">PAGE 2</Link>

  </Layout>
)

export default IndexPage
