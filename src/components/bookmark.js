import PropTypes from "prop-types"
import React from "react"


function importAll(r) {
  let images = {};
  r.keys().map((item) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

const Bookmark = ({ title, link, image }) => (

  <div class={`bookmark`}>
    <a href={link}>{title}</a>
    <img src={images[image]} alt={""}></img>
  </div>

)

Bookmark.propTypes = {
  siteTitle: PropTypes.string,
}

Bookmark.defaultProps = {
  title: `No Title`,
  link: `/`,
  image: `vic.png`
}

export default Bookmark
