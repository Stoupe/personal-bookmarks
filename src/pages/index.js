import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Bookmark from "../components/bookmark"

import "../components/style.css"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <div class={`container`}>
      <Bookmark title="CALENDAR" link="https://calendar.google.com/calendar/r"/>
      <Bookmark title="ENGR 301" link="https://ecs.wgtn.ac.nz/Courses/ENGR301_2020T1/"/>
      <Bookmark title="SWEN 301" link="https://ecs.wgtn.ac.nz/Courses/SWEN301_2020T1/"/>
      <Bookmark title="SWEN 304" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T1/"/>
      <Bookmark title="COMP 307" link="https://ecs.wgtn.ac.nz/Courses/COMP307_2020T1/"/>
    </div>

    <Link to="/page-2">PAGE 2</Link>

  </Layout>
)

export default IndexPage
