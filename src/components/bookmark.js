import PropTypes from "prop-types"
import React from "react"
// import logo from "../images/"



function importAll(r) {
  let images = {};
  r.keys().map((item) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

const Bookmark = ({ title, link, image }) => (

  <div class={`bookmark`}>
    
    <img src={images[image]} alt={""}></img>
    <a href={link}>{title}</a>
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
