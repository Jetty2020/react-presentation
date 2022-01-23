import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | React-project</title>
    </Helmet>
  );
}

export default PageTitle;

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
};
