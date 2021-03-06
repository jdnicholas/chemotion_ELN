import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import UserStore from '../stores/UserStore';

const ComputedPropLabel = ({ cprops }) => {
  const data = UserStore.getState().profile.data || {};
  const enableComputedProps = _.get(data, 'computed_props.enable', false);
  if (!enableComputedProps) return <span />;

  if (!cprops || cprops.length === 0) return <span />;
  cprops.sort((a, b) => a.updated_at - b.updated_at);
  const { status } = cprops[cprops.length - 1];

  let statusIcon = '';
  const style = {};
  if (status === 'completed') {
    statusIcon = 'fa-calculator';
    style.color = 'green';
  } else if (status === 'in_progress') {
    statusIcon = 'fa-spinner fa-spin';
  }

  return (
    <i className={`fa ${statusIcon}`} style={style} />
  );
};

ComputedPropLabel.propTypes = {
  cprops: PropTypes.arrayOf(PropTypes.object),
};

export default ComputedPropLabel;
