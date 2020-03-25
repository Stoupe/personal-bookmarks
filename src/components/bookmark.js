import PropTypes from "prop-types"
import React from "react"

const Bookmark = ({ title, link, image }) => (


  <div class={`bookmark`}>
    <img src={image}></img>
    <a href={link}>{title}</a>
  </div>

)

Bookmark.propTypes = {
  siteTitle: PropTypes.string,
}

Bookmark.defaultProps = {
  title: `No Title`,
  link: `/`,
  image: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png`
}

export default Bookmark
