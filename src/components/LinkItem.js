import React, { PropTypes } from 'react';
import icons from './icons/IconModule';

const LinkItem = ({ name, thumbnail, description, defaultIcon, url }) => {
  return (
    <a href={url}>
      {
        thumbnail ?
          <img src={thumbnail} /> :
          <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
            {icons[defaultIcon]}
          </svg>
      }
      <span className="title">{name}</span>
      <span className="description">{description}</span>
    </a>
  );
}

LinkItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  defaultIcon: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default LinkItem;
