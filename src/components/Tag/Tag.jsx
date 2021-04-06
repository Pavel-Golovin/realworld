import React from 'react';
import PropTypes from 'prop-types';
import classes from './Tag.module.scss';

const Tag = ({ tagName, onDelete }) =>
  tagName === '' ? null : (
    <div className={classes.tag}>
      <p className={classes.tag__tagName}>{tagName}</p>
      <button className={classes.tag__deleteBtn} type="button" onClick={onDelete}>
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
