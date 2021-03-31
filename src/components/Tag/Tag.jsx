import React from 'react';
import PropTypes from 'prop-types';
import classes from './Tag.module.scss';

const Tag = ({ tagName, onDelete }) => (
  <div className={classes.Tag}>
    <p className={classes.Tag__tagName}>{tagName}</p>
    <button type="button" className={classes.Tag__deleteBtn} onClick={onDelete}>
      Delete
    </button>
  </div>
);

Tag.defaultProps = {
  tagName: '',
  onDelete: () => {},
};

Tag.propTypes = {
  tagName: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Tag;
