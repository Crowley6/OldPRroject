import React from 'react';
import m3 from './AppGrid3.module.css';

const AppGrid4 = (props) => {
  return (
    <div className={`${m3.AppGrid_3}`}>
      <input type='text' value={props.a} />
      <a>{props.a}</a>

    </div>
  );
}
export default AppGrid4;