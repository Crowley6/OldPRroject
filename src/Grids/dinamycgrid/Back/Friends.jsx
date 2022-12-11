import React from 'react';
import { NavLink } from 'react-router-dom';
import m5 from './../css/Chat.module.css';

const DialogItem = (props) => { return <div><img src={props.url} /><NavLink to={'/SomeChat/' + props.name} className={m5.dialog}>{props.name}</NavLink></div> }

const Friends = (props) => {

  let dElem = props.dID.map(dialogurl => <DialogItem url={dialogurl.url} />); 
  let dElem2 = props.dID.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  return (
    <div className={m5.Chat_1}>
      <div>{dElem}</div>
      <div>{dElem2}</div>   
    </div>
  );
}
export default Friends;