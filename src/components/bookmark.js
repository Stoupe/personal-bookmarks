import PropTypes from "prop-types"
import React from "react"

const Bookmark = ({ title, link }) => (

    <div
      style={{
          flex: `row wrap`,
        // margin: `10px auto`,
        maxWidth: 200,
        padding: `1rem 1rem`,
        background: `#eee`,
        borderRadius: `20px`,
      }}
    >
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
