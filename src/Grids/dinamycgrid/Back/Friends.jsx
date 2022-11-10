import { NavLink } from 'react-router-dom';
import m5 from './../css/Chat.module.css';

const DialogItem = (props) => { return <NavLink to={'/SomeChat/' + props.name} className={m5.dialog}>{props.name}</NavLink> }


const Friends = () => {

  let dID = [
    { id: 1, name: "Дмитрий" },
    { id: 2, name: "Человек" },
    { id: 3, name: "Он" },
    { id: 4, name: "Кто-То" },
    { id: 5, name: "ТОт-Самый" },
  ]

  let dElem = dID.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  return (
    <div className={m5.Chat_1}>
      {dElem}
    </div>
  );
}
export default Friends;