import React from 'react';
import m3 from './css/DinamycGrid.module.css';
import Comment from './../projects/comment/comment';

const AppGrid3 = (props) => {

  let сElem = props.dcID2.cD.map(m => <Comment message={m.message} likeCount={m.likeCount} />);

  return (
    <div className={`${m3.AppGrid_3}`}>
      {сElem}
    </div>
  );
}
export default AppGrid3;