import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Bookmark from "../components/bookmark"

import "../components/style.css"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <div class={`container`}>
      <section>
      <Bookmark title="Calendar" image="google_calendar.png" link="https://calendar.google.com/calendar/r"/>
      <Bookmark title="GitHub" image="github.png" link="https://github.com/Stoupe?tab=repositories"/>
      </section>

      <h3>ENGR 301</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/ENGR301_2020T1/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/ENGR301_2020T1/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/ENGR301_2020T1/Assignments"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=ENGR301_2020T1"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/ENGR301"/>
        <Bookmark title="GitLab" link="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group4/group-4"/>
      </section>

      <h3>SWEN 301</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/SWEN301_2020T1/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/SWEN301_2020T1/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/SWEN301_2020T1/Assignments"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=SWEN301_2020T1"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/SWEN301"/>
      </section>
      
      <h3>SWEN 304</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T1/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T1/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T1/Assignments"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=SWEN304_2020T1"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/SWEN304"/>
      </section>

      <h3>COMP 307</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/COMP307_2020T1/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/COMP307_2020T1/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/COMP307_2020T1/Assignments"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=COMP307_2020T1"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/COMP307"/>
      </section>
    </div>

  </Layout>
)

export default IndexPage
