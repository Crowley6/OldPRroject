import React from 'react';
import m4 from './item.module.css';

const Item = () => {
  return (
      <div className={`${m4.items}`}>
        <a>Проект</a><br />
        <img src="#"></img>
      </div>
  );
}
export default Item;