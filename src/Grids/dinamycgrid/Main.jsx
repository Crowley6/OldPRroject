import React from 'react';
import m3 from './css/DinamycGrid.module.css';
import Comment from './../projects/comment/comment';

const AppGrid3 = () => {
  let cD = [
    { id: 1, message: "Какое-то сообщение", likeCount: 14 },
    { id: 2, message: "Что-то на неважном", likeCount: 12 },
    { id: 3, message: "ААА!ъУъ!?", likeCount: 4 },
  ]

  let сElem = cD.map(m => <Comment message={m.message} likeCount={m.likeCount} />);
  
  return (
    <div className={`${m3.AppGrid_3}`}>
      { сElem }
    </div>
  );
}
export default AppGrid3;