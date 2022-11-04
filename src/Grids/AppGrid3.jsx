import React from 'react';
import m3 from './AppGrid3.module.css';
import Comment from './projects/comment/comment';

const AppGrid3 = () => {
  return (
    <div className={`${m3.AppGrid_3}`}>
      <Comment message="12" />
    </div>
  );
}
export default AppGrid3;