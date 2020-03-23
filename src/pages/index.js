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

    <Bookmark title="GOOGLE CALENDAR" link="https://calendar.google.com/calendar/r"/>

      <h3>ENGR 301</h3>
      <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/ENGR301_2020T1/"/>
      <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/ENGR301_2020T1/LectureSchedule"/>
      <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/ENGR301_2020T1/Assignments"/>
      <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=ENGR301_2020T1"/>
      <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/ENGR301"/>

      <h3>SWEN 301</h3>
      <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/SWEN301_2020T1/"/>
      <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/SWEN301_2020T1/LectureSchedule"/>
      <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/SWEN301_2020T1/Assignments"/>
      <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=SWEN301_2020T1"/>
      <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/SWEN301"/>
      
      <h3>SWEN 304</h3>
      <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T1/"/>
      <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T1/LectureSchedule"/>
      <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T1/Assignments"/>
      <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=SWEN304_2020T1"/>
      <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/SWEN304"/>

      <h3>COMP 307</h3>
      <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/COMP307_2020T1/"/>
      <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/COMP307_2020T1/LectureSchedule"/>
      <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/COMP307_2020T1/Assignments"/>
      <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=COMP307_2020T1"/>
      <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/COMP307"/>
    
    </div>

    <Link to="/page-2">PAGE 2</Link>

  </Layout>
)

export default IndexPage
