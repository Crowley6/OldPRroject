import React from 'react';
import m3 from './AppGrid3.module.css';
import Item from './projects/item';
import Comment from './projects/comment/comment';

const AppGrid4 = () => {
  return (
    <div className={`${m3.AppGrid_3}`}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Comment message="12" />
    </div>
  );
}
export default AppGrid4;