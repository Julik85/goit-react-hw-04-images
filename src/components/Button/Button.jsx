import React from 'react';
import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ handleLoadMoreBTN }) {
  return (
    <LoadMore type="button" onClick={handleLoadMoreBTN}>
      Load More
    </LoadMore>
  );
}

Button.propTypes = {
  handleLoadMoreBTN: PropTypes.func.isRequired,
};