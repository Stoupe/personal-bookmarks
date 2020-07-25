import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bookmark from "../components/bookmark"

import "../components/style.css"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <div class={`container`}>
      <section>
      {/* <Bookmark title="Rabbit Lounge" image="rabbit_lounge.png" link="http://ec2-3-106-115-240.ap-southeast-2.compute.amazonaws.com"/> */}
      <Bookmark title="Calendar" image="google_calendar.png" link="https://calendar.google.com/calendar/r"/>
      <Bookmark title="Gmail" image="gmail.png" link="https://mail.google.com/mail/u/0/#inbox"/>
      <Bookmark title="MyTools" link="https://www.wgtn.ac.nz/students/tools"/>
      <Bookmark title="Work Experience" link="https://ecs.wgtn.ac.nz/Main/WorkExperience/WebHome"/>
      <Bookmark title="Your Marks" link="https://apps.ecs.vuw.ac.nz/cgi-bin/studentmarks"/>
      <Bookmark title="VStream" link="https://vstream.hosted.panopto.com/Panopto/Pages/Home.aspx"/>
      <Bookmark title="Blackboard" link="https://blackboard.vuw.ac.nz/"/>
      <Bookmark title="GitHub" image="github.png" link="https://github.com/Stoupe?tab=repositories"/>
      <Bookmark title="GitLab" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/trimester-2-2020"/>
      </section>

      <h3>ENGR 302</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/ENGR302_2020T2/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/ENGR302_2020T2/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/ENGR302_2020T2/Assessments"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=ENGR302_2020T2"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/ENGR302"/>
        <Bookmark title="GitLab Repo" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/course-work/engr300/2020/group4/group-4"/>
        <Bookmark title="Zoom" image="zoom.png" link="https://vuw.zoom.us/my/engr302"/>
      </section>

      <h3>SWEN 324</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/SWEN304_2020T2/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/SWEN324_2020T2/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/SWEN324_2020T2/Assignments"/>
        <Bookmark title="Weekly Questions" link="https://ecs.wgtn.ac.nz/cgi-bin/swen324-questions"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=SWEN324_2020T2"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/SWEN324"/>
        <Bookmark title="GitLab" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/groups/trimester-2-2020/swen-324/"/>
        <Bookmark title="Board" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/groups/trimester-2-2020/swen-324/-/boards/"/>
        <Bookmark title="Zoom" image="zoom.png" link="https://vuw.zoom.us/my/swen324"/>
      </section>
      
      <h3>SWEN 325</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/SWEN325_2020T2/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/SWEN325_2020T2/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/SWEN325_2020T2/Assignments"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=SWEN325_2020T2"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/SWEN325"/>
        <Bookmark title="GitLab" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/groups/trimester-2-2020/swen-325/"/>
        <Bookmark title="Board" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/groups/trimester-2-2020/swen-325/-/boards/"/>
        <Bookmark title="Zoom" image="zoom.png" link="https://vuw.zoom.us/my/swen325"/>
      </section>

      <h3>COMP 309</h3>
      <section>
        <Bookmark title="Wiki" link="https://ecs.wgtn.ac.nz/Courses/COMP309_2020T2/"/>
        <Bookmark title="Lecture Schedule" link="https://ecs.wgtn.ac.nz/Courses/COMP309_2020T2/LectureSchedule"/>
        <Bookmark title="Assignments" link="https://ecs.wgtn.ac.nz/Courses/COMP309_2020T2/Assignments"/>
        <Bookmark title="Forum" link="https://ecs.wgtn.ac.nz/cgi-bin/yabb/YaBB.pl?board=COMP309_2020T2"/>
        <Bookmark title="Submission" link="https://apps.ecs.vuw.ac.nz/submit/COMP309"/>
        <Bookmark title="GitLab" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/groups/trimester-2-2020/comp-309/"/>
        <Bookmark title="Board" image="gitlab.png" link="https://gitlab.ecs.vuw.ac.nz/groups/trimester-2-2020/comp-309/-/boards/"/>
        <Bookmark title="Zoom" image="zoom.png" link="https://vuw.zoom.us/my/comp309"/>
      </section>
    </div>

  </Layout>
)

export default IndexPage
