import React from 'react';
import PropTypes from 'prop-types';
import classes from './TagsList.module.scss';

/* eslint-disable react/no-array-index-key */
const TagsList = ({ tagList }) => (
  <ul className={classes.tagsList}>
    {tagList.map((tag, i) => (
      <li key={i} className={classes.tagsList__item}>
        {tag}
      </li>
    ))}
  </ul>
);

TagsList.defaultProps = {
  tagList: [],
};

TagsList.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.object),
};

export default TagsList;
