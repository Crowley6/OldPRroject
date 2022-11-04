import React from 'react';
import m3 from './AppGrid3.module.css';
import m5 from './Chat.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return <NavLink to={'/AppGrid5/' + props.name} className={m5.dialog}>{props.name}</NavLink>
}
const Message = (props) => {
  return <div >{props.message}</div>
}

const AppGrid6 = () => {
  return (
    <div className={m3.AppGrid_3}>
      <div className={m5.Chat}>
        <div className={m5.Chat_1}>
          <DialogItem name="Дмитрий" />
          <DialogItem name="Человек" />
          <DialogItem name="Он" />
          <DialogItem name="Кто-То" />
          <DialogItem name="ТОт-Самый" />
        </div>
        <div className={m5.Chat_2}>
          <Message message='Какое-то сообщение' />
          <Message message='Что-то на неважном' />
          <Message message='ААА!ъУъ!?' />
        </div>
      </div>
    </div>
  );
}

export default AppGrid6;