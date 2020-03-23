import PropTypes from "prop-types"
import React from "react"

const Bookmark = ({ title, link }) => (

    <div class={`bookmark`}>
        <a href={link}>{title}</a>
    </div>
)

Bookmark.propTypes = {
  siteTitle: PropTypes.string,
}

Bookmark.defaultProps = {
  title: `No Title`,
  link: `No Link`
}

export default Bookmark
