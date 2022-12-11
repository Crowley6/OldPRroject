import React from 'react';
import comment from './comment.module.css';

const Comment = (props) => {

  let a = () => {
    let aRefText = aRef.current.value;
    alert(aRefText);
  }

  let aRef = React.createRef();
  

  return (
    <div className={`${comment.comment}`}>
      <a>Проект</a><br />
      <textarea cols="30" rows="10" ref={aRef} value={props.message}></textarea>
      <div><span>like: {props.likeCount}</span></div>
      <button onClick={a}>Новый пост</button>
    </div>
  );
}
export default Comment;