import React from 'react';
import comment from './comment.module.css';

const Comment = (props) => {
  return (
    <div className={`${comment.comment}`}>
      <a>Проект</a><br />
      <textarea name="" id="" cols="30" rows="10" value={props.message}></textarea>
      <div><span>like: {props.likeCount}</span></div>
      <button>Новый пост</button>
    </div>
  );
}
export default Comment;